@extends('scaffenger::layout')

@section('css')
@stop

@section('page_title')
{{$config['title']}}
@stop

@section('content')

<h2>Manage {{$config['title']}}</h2>
{!! Form::open(['url' => 'admin/list/'.$table, 'id' => 'list_form', 'method' => 'GET']) !!}

<div class="row">
  <div class="col-xs-12 col-md-4">
    <label>
      <ul class="list-inline list-unstyled">
      @if(isset($config['actions']['delete']))
        <li>
          <div class="btn-group">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-gears"></i> Do with selected <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu">
              <li>
                <a href="#" class="delete_selected" data-table="{{$table}}"><i class="fa fa-trash-o"></i> Delete</a>
              </li>
            </ul>
          </div>
        </li>
      @endif
        <li>
          <select size="1" name="take" id="take_select" class="form-control input-xsmall">
            <option value="20" @if(Input::get('take') == 20) {{ 'selected="selected"' }} @endif>20</option>
            <option value="50" @if(Input::get('take') == 50) {{ 'selected="selected"' }} @endif>50</option>
            <option value="100" @if(Input::get('take') == 100) {{ 'selected="selected"' }} @endif>100</option>
          </select>
        </li>
        <li>records</li>
      </ul>
    </label>
  </div>
  <div class="col-xs-12 col-md-6">
    <div class="input-group">
    @if(Input::get('filter') != '')
      <span class="input-group-btn">
        <a href="#" class="btn btn-danger clear_filter"><span class="btn-ripple animate"></span><i class="fa fa-times"></i></a>
      </span>
    @endif
      <input type="text" id="filter" name="filter" class="form-control" placeholder="Filters" value="{{Input::get('filter')}}">
      <span class="input-group-btn">
        <button type="submit" class="btn btn-effect-ripple btn-primary"><span class="btn-ripple animate"></span><i class="fa fa-search"></i> Search</button>
      </span>
    </div>
  </div>
  <div class="col-xs-12 col-md-2 text-right">
@if(isset($config['actions']['create']))
  @if(!isset($config['actions']['create']['url']))
    <a href="{{ url('admin/create/'.$table) }}" class="btn btn-effect-ripple btn-success"><i class="fa fa-plus"></i> Create new</a>
  @else
    <a href="{{ url($config['actions']['create']['url']) }}" class="{{ $config['actions']['create']['class'] }}" id="{{ $config['actions']['create']['id'] }}"><i class="fa fa-plus"></i> {{ $config['actions']['create']['label'] }}</a>
  @endif
@endif
  </div>
  <div class="col-xs-12" id="msg_container">
    @if(Session::has('message'))
    <div class="alert alert-success">
      <button type="button" class="close" data-dismiss="alert">×</button>
      <i class="fa fa-check-circle"></i> {{ Session::get('message') }}
    </div>
    @elseif(Session::has('error'))
    <div class="alert alert-danger">
      <button type="button" class="close" data-dismiss="alert">×</button>
      <i class="fa fa-exclamation-triangle"></i> {{ Session::get('error') }}
    </div>
    @else
    <div class="alert hidden"></div>
    @endif
  </div>
</div>

<!-- Table Styles Content -->
<div class="table-responsive">
  <table class="table table-striped table-hover table-bordered">
    <thead>
      <tr>
        <th style="width: 80px;" class="text-center">
          <label class="csscheckbox csscheckbox-success">
            <input type="checkbox">
            <span></span>
          </label>
        </th>
@foreach($config['columns'] as $column => $data)
  @if(!in_array($column, $config['hideInList']))
    @if(Input::get('by') == $column)
      @if(Input::get('type') == 'ASC')
        <th>{!! HTML::decode(link_to('admin/list/'.$table.'?by='.$column.'&amp;type=DESC&amp;page='.$objects->currentPage().'&amp;take='.Input::get('take').'&amp;filter='.Input::get('filter'), $data['label'].' <i class="fa fa-sort-desc"></i>', ['class' => 'text-black'])) !!}</th>
      @else
        <th>{!! HTML::decode(link_to('admin/list/'.$table.'?by='.$column.'&amp;type=ASC&amp;page='.$objects->currentPage().'&amp;take='.Input::get('take').'&amp;filter='.Input::get('filter'), $data['label'].' <i class="fa fa-sort-asc"></i>', ['class' => 'text-black'])) !!}</th>
      @endif
    @else
      <th>{!! HTML::decode(link_to('admin/list/'.$table.'?by='.$column.'&amp;type=ASC&amp;page='.$objects->currentPage().'&amp;take='.Input::get('take').'&amp;filter='.Input::get('filter'), $data['label'].' <i class="fa fa-sort"></i>', ['class' => 'text-black'])) !!}</th>
    @endif
  @endif
@endforeach
      </tr>
    </thead>
    <tbody>
    @if(!$objects->isEmpty())
    @foreach($objects as $object)
      <tr class="contextmenu" data-target="#context{{$object->id}}">
        <td class="text-center">
          <label class="csscheckbox csscheckbox-primary">
            <input type="checkbox" class="group-checkable" value="{{$object->id}}">
            <span></span>
          </label>
        </td>
        @foreach($config['columns'] as $column => $data)
          @if(!in_array($column, $config['hideInList']))
            {!! \Column::toList($object, $table, $column, $config) !!}
          @endif
        @endforeach
      </tr>
    @endforeach
    @else
    <tr>
      <td colspan="{{ (count($config['columns']) - count($config['hideInList']) + 2) }}" class="text-center">No records found</td>
    </tr>
    @endif
    </tbody>
    <tfoot>
      <tr>
        <th colspan="{{ (count($config['columns']) - count($config['hideInList']) + 2) }}">
          <div class="row">
            <div class="col-xs-12 col-md-2 pull-left">
              Showing {{ $objects->count() }} to {{ ($objects->currentPage()*$objects->perPage()) }} of {{ $objects->total() }} records
            </div>
            <div class="col-xs-12 col-md-5 text-right pull-right">
              {!! $objects->appends(['relationship' => Input::get('relationship', ''), 'fid' => Input::get('fid', 0), 'by' => Input::get('by', 'id'), 'type' => Input::get('type', 'ASC'), 'filter' => Input::get('filter'), 'take' => Input::get('take')])->render() !!}
            </div>
          </div>
        </th>
      </tr>
    </tfoot>
  </table>
  @foreach($objects as $object)
  <div id="context{{$object->id}}">
    <ul class="dropdown-menu" role="menu">
  @if(isset($config['actions']['edit']))
    @if(isset($config['actions']['edit']['url']))
      <li><a tabindex="-1" href="{{URL::to(str_replace('{id}', $object->id, $config['actions']['edit']['url']))}}">{{HTML::decode($config['actions']['edit']['label'])}}</li>
    @else
      <li><a tabindex="-1" href="{!! URL::to('admin/edit/'.$table.'/'.$object->id) !!}"><i class="fa fa-edit fa-fw pull-right"></i> Edit</a></li>
    @endif
  @endif

  @if(isset($config['actions']['delete']))
    @if(isset($config['actions']['delete']['url']))
      <li><a tabindex="-1" class="delete" href="{{URL::to(str_replace('{id}', $object->id, $config['actions']['delete']['url']))}}">{{HTML::decode($config['actions']['delete']['label'])}}</li>
    @else
      <li><a tabindex="-1" href="{{URL::to('admin/delete/'.$table.'/'.$object->id)}}" class="delete"><i class="fa fa-trash-o danger fa-fw pull-right"></i> Delete</a></li>
    @endif
  @endif

    @if(isset($config['custom_actions']) and count($config['custom_actions']) > 0)
    <?php
      //Change {}  codes with real values
      foreach($config['custom_actions'] as $action => $data) {
        preg_match_all('/({.*})/', $data['url'], $matches);
        if($matches[0]) {
          foreach($matches[0] as $shortcode) {
            $real_field = trim($shortcode, '{}');
            $data['url'] = str_replace($shortcode, $object->$real_field, $data['url']);
          }
        }
    ?>
        <li><a tabindex="-1" href="{{URL::to($data['url'])}}" {{$data['target'] ? 'target="'.$data['target'].'"' : ''}} {{$data['id'] ? 'id="'.$data['id'].'"' : ''}} {{$data['class'] ? 'class="'.$data['class'].'"' : ''}}>{{$data['icon']}} {{$data['label']}}</a></li>
    <?php
      }
    ?>
    @endif
    </ul>
  </div>
  @endforeach
</div>
<!-- END Table Styles Content -->

{!! Form::close() !!}
@stop

@section('js')
  <script src="{{asset('vendor/wislem/scaffenger/js/pages/uiTables.js')}}"></script>
  <script>$(function(){ UiTables.init(); });</script>
@stop