<?php namespace Wislem\Scaffenger\Helpers;

use Form;
use Input;

class FormHtml {

  protected $column;
  protected $column_html;
  protected $column_config;

  protected $html_attributes;

  protected $errors;

  public function __construct($column = '', $column_config = null, $field_attributes = [])
  {
    $this->errors = (\Session::has('errors')) ? \Session::get('errors') : null;

    $this->column = $column;
    $this->column_config = $column_config;

    //Native bootstrap 3.3.2 support
    $this->html_attributes = $field_attributes;
    if (isset($this->html_attributes['class'])) {
      $this->html_attributes['class'] .= ' form-control';
    } else {
      $this->html_attributes['class'] = 'form-control';
    }
  }

  public function text()
  {
    $has_error = ($this->errors and $this->errors->has($this->column)) ? true : false;

    $this->column_html = '<div class="form-group'. ($has_error ? ' has-error' : '') .'">'.PHP_EOL;
    $this->column_html .= Form::label($this->column, $this->column_config['label']);
    $this->column_html .= Form::text($this->column, null, $this->html_attributes);
    $this->column_html .= $has_error ? $this->errors->first($this->column, '<span class="help-block">:message</span>') : '';
    $this->column_html .= '</div>' . PHP_EOL;

    return $this->column_html;
  }

  public function belongsTo(){
    $has_error = ($this->errors and $this->errors->has($this->column)) ? true : false;

    $fc = $this->column_config['relationship']['fc'];
    $fm = $this->column_config['relationship']['fm'];

    $parent_objects = $fm::orderBy($fc, 'ASC')->lists($fc, 'id');

    $this->column_html = '<div class="form-group'. ($has_error ? ' has-error' : '') .'">'.PHP_EOL;
    $this->column_html .= Form::label($this->column, $this->column_config['label']).PHP_EOL;
    $this->column_html .= Form::select($this->column, ['' => '---']+$parent_objects, null, $this->html_attributes).PHP_EOL;
    $this->column_html .= $has_error ? $this->errors->first($this->column, '<span class="help-block">:message</span>') : '';
    $this->column_html .= '</div>'.PHP_EOL;

    return $this->column_html;
  }

  public function belongsToMany(){
    $has_error = ($this->errors and $this->errors->has($this->column)) ? true : false;

    $fc = $this->column_config['relationship']['fc'];
    $fm = $this->column_config['relationship']['fm'];

    $parent_objects = $fm::orderBy($fc, 'ASC')->lists($fc, 'id');

    $this->html_attributes += ['multiple' => ''];

    $this->column_html = '<div class="form-group'. ($has_error ? ' has-error' : '') .'">'.PHP_EOL;
    $this->column_html .= Form::label($this->column, $this->column_config['label']).PHP_EOL;
    $this->column_html .= Form::select($this->column.'[]', ['' => '']+$parent_objects, null, $this->html_attributes).PHP_EOL;
    $this->column_html .= $has_error ? $this->errors->first($this->column, '<span class="help-block">:message</span>') : '';
    $this->column_html .= '</div>'.PHP_EOL;

    return $this->column_html;
  }

  public function image($model = '', $id = 0)
  {
    $has_error = ($this->errors and $this->errors->has($this->column)) ? true : false;

    if(Form::getValueAttribute($this->column)) {
      $this->column_html = '<div class="form-group well'. ($has_error ? ' has-error' : '') .'">'.PHP_EOL;
      $this->column_html .= Form::label($this->column, $this->column_config['label']);

      $this->column_html .= '<div class="row">'.PHP_EOL;
      $this->column_html .= '<div class="col-md-4">'.PHP_EOL;
      $this->column_html .= '<a href="'.\Config::get('app.url').Form::getValueAttribute($this->column).'" target="_blank" id="featured_img_holder" data-toggle="lightbox-image"><img src="'.\Config::get('app.url').Form::getValueAttribute($this->column).'" class="img-responsive"></a>'.PHP_EOL;
      $this->column_html .= '<a href="#" class="remove_featured_img btn btn-sm btn-danger" data-model="'.$model.'" data-id="'.$id.'" data-target="#'.$this->column.'"><i class="fa fa-trash"></i> Remove image</a>'.PHP_EOL;
      $this->column_html .= '</div>'.PHP_EOL;
      $this->column_html .= '<div class="col-md-8 dropzones dropzone dz-clickable" data-type="image" data-field="'.$this->column.'">'.PHP_EOL;
      $this->column_html .= '<div class="dz-default dz-message"><span>Drop image here to upload</span></div>'.PHP_EOL;
      $this->column_html .= '</div>'.PHP_EOL;
      $this->column_html .= '</div>'.PHP_EOL;
      $this->column_html .= Form::hidden($this->column, null, ['id' => $this->column]).PHP_EOL;
    }else {
      $this->column_html = '<div class="form-group well'. ($has_error ? ' has-error' : '') .'">'.PHP_EOL;
      $this->column_html .= Form::label($this->column, $this->column_config['label']);

      $this->column_html .= '<div class="dropzones dropzone dz-clickable" data-type="image" data-field="'.$this->column.'">'.PHP_EOL;
      $this->column_html .= '<div class="dz-default dz-message"><span>Drop image here to upload</span></div>'.PHP_EOL;
      $this->column_html .= '</div>'.PHP_EOL;
      $this->column_html .= Form::hidden($this->column, null, ['id' => $this->column]).PHP_EOL;
    }
    $this->column_html .= $has_error ? $this->errors->first($this->column, '<span class="help-block">:message</span>') : '';

    $this->column_html .= '</div>' . PHP_EOL;

    return $this->column_html;
  }

  public function slug()
  {
    $has_error = ($this->errors and $this->errors->has($this->column)) ? true : false;

    $this->column_html = '<div class="form-group'. ($has_error ? ' has-error' : '') .'">'.PHP_EOL;
    $this->column_html .= Form::label($this->column, $this->column_config['label']).PHP_EOL;
    $this->column_html .= '<div class="input-group">'.PHP_EOL;
    $this->column_html .= Form::text($this->column, null, $this->html_attributes + ['readonly' => '']).PHP_EOL;
    $this->column_html .= '<span class="input-group-btn">';
    $this->column_html .= '<button class="btn btn-primary enable_slug" data-id="'.preg_quote($this->column, '/').'" type="button" title="Edit"><i class="fa fa-edit"></i></button>'.PHP_EOL;
    $this->column_html .= '</span>'.PHP_EOL;
    $this->column_html .= $has_error ? $this->errors->first($this->column, '<span class="help-block">:message</span>') : '';
    $this->column_html .= '</div>'.PHP_EOL;
    $this->column_html .= '</div>'.PHP_EOL;

    return $this->column_html;
  }

  public function textarea()
  {
    $has_error = ($this->errors and $this->errors->has($this->column)) ? true : false;

    $this->column_html = '<div class="form-group'. ($has_error ? ' has-error' : '') .'">'.PHP_EOL;
    $this->column_html .= Form::label($this->column, $this->column_config['label']);
    $this->column_html .= Form::textarea($this->column, null, $this->html_attributes);
    $this->column_html .= $has_error ? $this->errors->first($this->column, '<span class="help-block">:message</span>') : '';
    $this->column_html .= '</div>' . PHP_EOL;

    return $this->column_html;
  }

  public function password()
  {
    $has_error = ($this->errors and $this->errors->has($this->column)) ? true : false;

    $this->column_html = '<div class="form-group' . ($has_error ? ' has-error' : '') . '">' . PHP_EOL;
    $this->column_html .= Form::label($this->column, $this->column_config['label']);
    $this->column_html .= Form::password($this->column, $this->html_attributes);
    $this->column_html .= $has_error ? $this->errors->first($this->column, '<span class="help-block">:message</span>') : '';
    $this->column_html .= '</div>' . PHP_EOL;

    return $this->column_html;
  }

  public function date()
  {
    $has_error = ($this->errors and $this->errors->has($this->column)) ? true : false;

    $this->column_html = '<div class="form-group' . ($has_error ? ' has-error' : '') . '">' . PHP_EOL;
    $this->column_html .= Form::label($this->column, $this->column_config['label']);
    $this->column_html .= Form::text($this->column, null, $this->html_attributes);
    $this->column_html .= $has_error ? $this->errors->first($this->column, '<span class="help-block">:message</span>') : '';
    $this->column_html .= '</div>' . PHP_EOL;

    return $this->column_html;
  }

  public function select()
  {
    $has_error = ($this->errors and $this->errors->has($this->column)) ? true : false;

    $this->column_html = '<div class="form-group'. ($has_error ? ' has-error' : '') .'">'.PHP_EOL;
    $this->column_html .= Form::label($this->column, $this->column_config['label']).PHP_EOL;
    $this->column_html .= Form::select($this->column, ['' => '---']+$this->column_config['options'], null, $this->html_attributes).PHP_EOL;
    $this->column_html .= $has_error ? $this->errors->first($this->column, '<span class="help-block">:message</span>') : '';
    $this->column_html .= '</div>'.PHP_EOL;

    return $this->column_html;
  }

  public function email()
  {
    $has_error = ($this->errors and $this->errors->has($this->column)) ? true : false;

    $this->column_html = '<div class="form-group'. ($has_error ? ' has-error' : '') .'">'.PHP_EOL;
    $this->column_html .= Form::label($this->column, $this->column_config['label']);
    $this->column_html .= Form::email($this->column, null, $this->html_attributes);
    $this->column_html .= $has_error ? $this->errors->first($this->column, '<span class="help-block">:message</span>') : '';
    $this->column_html .= '</div>';

    return $this->column_html;
  }

  public function url()
  {
    $has_error = ($this->errors and $this->errors->has($this->column)) ? true : false;

    $this->column_html = '<div class="form-group'. ($has_error ? ' has-error' : '') .'">'.PHP_EOL;
    $this->column_html .= Form::label($this->column, $this->column_config['label']);
    $this->column_html .= Form::url($this->column, null, $this->html_attributes);
    $this->column_html .= $has_error ? $this->errors->first($this->column, '<span class="help-block">:message</span>') : '';
    $this->column_html .= '</div>';

    return $this->column_html;
  }

  public function order($model = '')
  {
    $has_error = ($this->errors and $this->errors->has($this->column)) ? true : false;

    $current_order = $model::max($this->column);

    $this->column_html = '<div class="form-group'. ($has_error ? ' has-error' : '') .'">'.PHP_EOL;
    $this->column_html .= Form::label($this->column, $this->column_config['label']).PHP_EOL;
    $this->column_html .= Form::input('number', $this->column, null, $this->html_attributes).PHP_EOL;
    $this->column_html .= '<small class="help-block">Current max global order: '.$current_order.'</small>'.PHP_EOL;
    $this->column_html .= $has_error ? $this->errors->first($this->column, '<span class="help-block">:message</span>') : '';
    $this->column_html .= PHP_EOL.'</div>'.PHP_EOL;

    return $this->column_html;
  }

  public function bool()
  {
    $has_error = ($this->errors and $this->errors->has($this->column)) ? true : false;

    $this->column_html = '<div class="checkbox">'.PHP_EOL;
    $this->column_html .= '<label for="'.$this->column.'">'.PHP_EOL;
    $this->column_html .= Form::checkbox($this->column, null, $this->html_attributes + ['id' => $this->column]);
    $this->column_html .= $this->column_config['label'].PHP_EOL;
    $this->column_html .= '</label>'.PHP_EOL;
    $this->column_html .= $has_error ? $this->errors->first($this->column, '<span class="help-block">:message</span>') : '';
    $this->column_html .= '</div>';

    return $this->column_html;
  }

  public function address(){
    //TODO: Show gmap after input of address
    $has_error = ($this->errors and $this->errors->has($this->column)) ? true : false;

    $this->column_html = '<div class="form-group'. ($has_error ? ' has-error' : '') .'">'.PHP_EOL;
    $this->column_html .= Form::label($this->column, $this->column_config['label']);
    $this->column_html .= Form::text($this->column, null, $this->html_attributes);
    $this->column_html .= $has_error ? $this->errors->first($this->column, '<span class="help-block">:message</span>') : '';
    $this->column_html .= '</div>' . PHP_EOL;

    return $this->column_html;
  }

  public function hidden()
  {
    $this->column_html .= Form::hidden($this->column, null, $this->html_attributes) . PHP_EOL;

    return $this->column_html;
  }

}