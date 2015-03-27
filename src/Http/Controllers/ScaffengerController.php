<?php namespace Wislem\Scaffenger\Http\Controllers;

use App\User;
use Auth;
use DB;
use Carbon\Carbon;
use Illuminate\Http\Response;
use File;
use Session;
use Config;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Str;

class ScaffengerController extends Controller {

  use ValidatesRequests;

  public function __construct()
  {
    $this->middleware('scaffenger.auth',
      ['except' =>
        ['getLogin', 'postLogin', 'getLogout', 'getForgotPassword', 'postForgotPassword', 'getResetPassword', 'postResetPassword']
      ]
    );
  }

  public function getIndex()
  {
    return view('scaffenger::dashboard');
  }

  public function getLogin()
  {
    return view('scaffenger::login');
  }

  public function postLogin(Request $request)
  {
    $this->validate($request, [
      'email' => 'required|email',
      'password' => 'required|min:4'
    ]);

    $credentials = $request->only('email', 'password');

    if(Auth::attempt($credentials, $request->has('remember'))) {
      if(!Auth::user()->can('access.admin')) {
        return redirect('admin/login')
            ->withErrors(['generic' => 'You do not have permission to enter.']);
      }

      return redirect()->intended($request->get('redirect'));
    }

    return redirect('admin/login')
        ->withErrors(['generic' => 'Provided email and password do not match an allowed user of the system.']);
  }

  public function getLogout()
  {
    Auth::logout();

    return redirect('admin/login');
  }

  public function getForgotPassword()
  {
    //TODO
  }

  public function postForgotPassword()
  {
    //TODO
  }

  public function getResetPassword()
  {
    //TODO
  }

  public function postResetPassword()
  {
    //TODO
  }

  public function getList(Request $request, $table = '')
  {
    if(!$table) {
      App::abort(404);
    }

    \Session::put('backlink', $request->fullUrl());

    $orderBy = $request->get('by', 'id');
    $orderType = $request->get('type', 'ASC');
    $take = ($request->has('take')) ? $request->get('take') : Config::get('scaffenger.config.rpp');
    $filter = ($request->has('filter')) ? $request->get('filter') : null;

    $config = Config::get('scaffenger.tables.'.$table);
    $model = $config['model'];

    $objects = new $model;

    if($filter) {
      //TODO: Search in related tables also
      $search_in = [];
      foreach($config['columns'] as $column => $search_field) {
        if(in_array($search_field['type'], ['slug', 'text', 'textarea', 'wysiwyg', 'email', 'select']))
          $search_in[$column] = $search_field;
      }

      $objects = $objects->where(function($query) use ($search_in, $filter){
        foreach($search_in as $search_field => $field_data) {
          $query->orWhere($search_field, 'LIKE', '%'.$filter.'%');
        }
      });
    }

    $objects = $objects->orderBy($orderBy, $orderType)->paginate($take);

    $objects->setPath(Config::get('app.url').'/admin/list/'.$table);

    return view('scaffenger::list')
      ->with('table', $table)
      ->with('model', $model)
      ->with('config', $config)
      ->with('objects', $objects);
  }

  public function getCreate($table = '')
  {
    if(!$table) {
      \App::abort(404);
    }

    $config = Config::get('scaffenger.tables.'.$table);

    $numOfProperties = 0;
    foreach($config['columns'] as $column => $data) {
      if(!in_array($column, $config['hideInCreate']) and !in_array($data['type'], Config::get('scaffenger.config.form_right_column_types'))) {
        $numOfProperties++;
      }
    }

    return view('scaffenger::create')
      ->with('table', $table)
      ->with('numOfProperties', $numOfProperties)
      ->with('config', $config);
  }

  public function postCreate(Request $request, $table = '')
  {
    $config = Config::get('scaffenger.tables.'.$table);

    if(isset($config['rules']) and !empty($config['rules'])) {
      $this->validate($request, $config['rules']);
    }

    DB::beginTransaction();

    if($request->has('password')) {
      $object = User::create([
        'email' => $request->get('email'),
        'password' => bcrypt($request->get('password'))
      ]);
    }else {
      $object = new $config['model'];
    }

    foreach($config['columns'] as $column => $column_config) {
      if(!in_array($column, $config['hideInCreate'])) {
        switch($column_config['type']) {
          case 'bool':
            $object->$column = ($request->has($column)) ? 1 : 0;
          break;

          case 'fk':
            switch($column_config['relationship']['type']) {
              case 'belongsTo':
                $object->$column = $request->get($column);
              break;

              case 'belongsToMany':
                if($request->has($column)) {
                  $object->$column()->sync($request->get($column));
                }else {
                  $object->$column()->sync([]);
                }
              break;
            }
          break;

          case 'date':
          case 'datetime':
            $object->$column = ($request->get($column)) ? (new Carbon($request->get($column), Config::get('app.timezone')))->format('Y-m-d H:i:s') : NULL;
          break;

          default:
            $object->$column = $request->get($column);
          break;
        }
      }
    }

    $object->save();

    if($config['has_media']) {
      $media = $request->get('media');

      if(count($media)) {
        $i = 0;
        $media_model = Config::get('scaffenger.config.media_model');
        $media_rel_func = Config::get('scaffenger.config.media_rel_func');
        foreach($media as $medium) {
          if($medium != '') {
            $mediaobj = $media_model::create(array(
              'path' => $medium,
              'is_active' => 1,
              'ordr' => $i
            ));

            $object->$media_rel_func()->save($mediaobj);
          }

          $i++;
        }
      }
    }

    DB::commit();

    if($object->id) {
      Session::flash('message', 'A new ' . $config['singular'] . ' was created successfully.');
    }else {
      Session::flash('error', 'Creating a new ' . $config['singular'] . ' failed.');
    }

    if($request->get('submit') == 'savecontinue') {
      if(isset($config['actions']['edit']['url'])) {
        return redirect(str_replace('{id}', '', $config['actions']['edit']['url']).$object->id);
      }else {
        return redirect('admin/edit/'.$table.'/'.$object->id);
      }
    }

    if($request->get('submit') == 'savenew') {
      if(isset($config['actions']['create']['url'])) {
        return redirect($config['actions']['create']['url']);
      }else {
        return redirect('admin/create/'.$table);
      }
    }

    if ($redirect = Session::get('backlink')) {
      if(strstr($redirect, '/'.$table)) {
        return redirect($redirect);
      }
    }
  }

  public function getEdit($table = '', $id = 0)
  {
    if(!$table or !$id) {
      \App::abort(404);
    }

    $config = Config::get('scaffenger.tables.'.$table);

    $object = $config['model']::find($id);

    $numOfProperties = 0;
    if($config['use_form_columns']) {
      foreach($config['columns'] as $column => $data) {
        if(!in_array($column, $config['hideInEdit']) and in_array($data['type'], Config::get('scaffenger.config.form_right_column_types'))) {
          $numOfProperties++;
        }
      }
    }

    return view('scaffenger::edit')
      ->with('table', $table)
      ->with('object', $object)
      ->with('numOfProperties', $numOfProperties)
      ->with('config', $config);
  }

  public function postUpdate(Request $request, $table = '', $id = 0)
  {
    $config = Config::get('scaffenger.tables.'.$table);

    DB::beginTransaction();

    try {
      $object = $config['model']::find($id);
    }catch (Exception $e) {
      return redirect('admin/list/'.$table)->with('error', 'Could not find '.$config['singular'].' #'.$id);
    }

    if(isset($config['rules']) and !empty($config['rules'])) {
      //Change {}  codes with real values
      foreach($config['rules'] as &$rule) {
        preg_match_all('/({.*})/', $rule, $matches);
        if($matches[0]) {
          foreach($matches[0] as $handlebared) {
            $real_column = trim($handlebared, '{}');
            $rule = str_replace($handlebared, $object->$real_column, $rule);
          }
        }
      }
      $this->validate($request, $config['rules']);
    }

    foreach($config['columns'] as $column => $column_config) {
      if(!in_array($column, $config['hideInEdit'])) {
        switch($column_config['type']) {
          case 'bool':
            $object->$column = ($request->has($column)) ? 1 : 0;
            break;

          case 'fk':
            switch($column_config['relationship']['type']) {
              case 'belongsToMany':
                if($request->has($column)) {
                  $object->$column()->sync($request->get($column));
                }else {
                  $object->$column()->sync([]);
                }
                break;
              case 'belongsTo':
                $object->$column = $request->get($column);
                break;
            }
            break;

          case 'password':
            $user = User::find($id);
            if($request->get($column) != '' and $user->password != $request->get($column)) {
              $user->password = bcrypt($request->get($column));
              $user->save();
            }
            break;

          case 'date':
          case 'datetime':
            $datetime = ($request->get($column) != '') ? new Carbon($request->get($column), Config::get('app.timezone')) : NULL;
            $object->$column = $datetime;
            break;
          default:
            $object->$column = $request->get($column);
            break;
        }
      }
    }

    if($object->save()) {
      Session::flash('message', ucfirst($config['singular']) . ' #' . $object->id . ' was edited successfully.');
    }else {
      Session::flash('error', 'Editing ' . $config['singular'] . ' #' . $object->id . ' failed.');
    }

    if($config['has_media']) {
      $media = $request->get('media');

      if(count($media)) {
        $i = 0;
        $media_model = Config::get('scaffenger.config.media_model');
        $media_rel_func = Config::get('scaffenger.config.media_rel_func');
        //Clean up old media entries
        $object->$media_rel_func()->delete();

        foreach($media as $medium) {
          if($medium != '') {
            $mediaobj = $media_model::create(array(
              'path' => $medium,
              'is_active' => 1,
              'ordr' => $i
            ));

            $object->$media_rel_func()->save($mediaobj);
          }

          $i++;
        }
      }
    }

    DB::commit();

    if($request->get('submit') == 'savecontinue') {
      if(isset($config['actions']['edit']['url'])) {
        return redirect(str_replace('{id}', '', $config['actions']['edit']['url']).$object->id);
      }else {
        return redirect('admin/edit/'.$table.'/'.$object->id);
      }
    }

    if($request->get('submit') == 'savenew') {
      if(isset($config['actions']['create']['url'])) {
        return redirect($config['actions']['create']['url']);
      }else {
        return redirect('admin/create/'.$table);
      }
    }

    if ($redirect = Session::get('backlink')) {
      if(strstr($redirect, '/'.$table)) {
        return redirect($redirect);
      }
    }
  }

  public function getDelete($table = '', $id = 0)
  {
    $model = Config::get('scaffenger.tables.'.$table.'.model');
    $entry_name = ucfirst(Config::get('scaffenger.tables.'.$table.'.singular'));
    $object = $model::find($id);

    if($object) {
      if ($object->delete()) {
        Session::flash('message', $entry_name . ' #' . $object->id . ' was deleted successfully');
      } else {
        Session::flash('error', 'Deletion of ' . $entry_name . ' #' . $object->id . ' failed.');
      }
    }else {
      Session::flash('error', $entry_name . ' with #' . $object->id . ' was not found.');
    }

    return redirect('admin/list/'.$table);
  }

  public function postDeleteSelected(Request $request)
  {
    $json = ['error' => 1, 'msg' => 'Something went wrong', 'url' => ''];
    if($request->ajax()) {
      $table = $request->get('table');
      $checkers = $request->get('checkers');

      if($table and $checkers) {
        $model = Config::get('scaffenger.tables.'.$table.'.model');
        $model::destroy($checkers);

        $json['error'] = 0;
        $json['msg'] = 'Selected ' . Config::get('scaffenger.tables.'.$table.'.title'). ' were deleted successfully';
        $json['url'] = Config::get('app.url').'/admin/list/'.$table;
      }
    }

    return response()->json($json);
  }

  public function postColumnUpdate(Request $request)
  {
    $json = ['error' => 0, 'msg' => '', 'result' => ''];
    if($request->ajax()) {
      try {
        $input = $request->only(['table', 'id', 'column', 'value']);

        $config = Config::get('scaffenger.tables.'.$input['table']);
        $type = $config['columns'][$input['column']]['type'];

        $object = $config['model']::find($input['id']);

        if($type == 'bool' and in_array($input['value'], [0, 1])) {
          $object->$input['column'] = ($input['value']) ? 0 : 1;
        }else {
          $object->$input['column'] = $input['value'];
        }

        $object->save();

        $json['result'] = $object->$input['column'];
        $json['msg'] = 'Value updated successfully.';
      }catch(Exception $e) {
        $json['error'] = 1;
        $json['msg'] = 'Something went wrong: '.$e->getMessage();
        $json['result'] = '';
      }
    }

    return response()->json($json);
  }

  public function postFileUpload(Request $request)
  {
    $response = ['error' => 0, 'filelink' => '', 'multiple' => []];

    //Make sure folders exist
    $dir = Config::get('scaffenger.config.uploads_folder');
    if(!is_dir($dir)) {
      mkdir($dir);
    }

    if($request->hasfile('dzfile')) {
      $file = $request->file('dzfile');
      try {
        $extension = $file->getClientOriginalExtension();
        $filename = str_replace('.'.$extension, '', $file->getClientOriginalName());
        $filename = Str::slugify($filename).'.'.$extension;;
        $file->move($dir, $filename);

        $response['filelink'] = Config::get('app.url').str_replace(public_path(), '', $dir).'/'.$filename;
      } catch (Exception $e) {
        $response['error'] = 1;
      }
    }

    return response()->json($response);
  }

  public function postRemoveUpload(Request $request){
    $filepath = $request->get('filepath');
    $response = array('error' => 0, 'msg' => '');

    try {
      File::delete(public_path().$request->get('filepath'));

      if($request->has('type') and $request->get('type') == 'column') {
        $model = $request->get('model');
        $column = $request->get('column');
        $entry = $model::find($request->get('id'));
        $entry->$column = '';
        $entry->save();
      }else {
        $media_model = Config::get('scaffenger.config.media_model');
        $exists = $media_model::where('path', $filepath)->first();
        if($exists) {
          $exists->delete();
        }
      }
    } catch (Exception $e) {
      $response['error'] = 1;
      $response['msg'] = 'Something went wrong while deleting file.';
    }

    return response()->json($response);
  }

  public function postSlugit(Request $request)
  {
    return Str::slugify($request->get('title'));
  }

}