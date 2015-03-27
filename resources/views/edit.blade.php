@extends('scaffenger::layout')

@section('css')

@stop

@section('page_title')
{{$config['title']}}
@stop

@section('content')

{!! Form::model($object, ['url' => 'admin/update/'.$table.'/'.$object->id, 'method' => 'POST']) !!}
<div class="row">
  <div class="col-xs-12 col-md-7" role="tabpanel">
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active"><a href="#{{Config::get('app.locale')}}" data-toggle="tab"><strong>{{ucfirst(Config::get('app.locale'))}}</strong></a></li>
    @if(isset($config['has_media']) and $config['has_media'])
      <li role="presentation"><a href="#media" data-toggle="tab">Media</a></li>
    @endif
    </ul>
    <p>&nbsp;</p>
    <div class="tab-content">
      <div class="tab-pane active" id="{{Config::get('app.locale')}}">
        @foreach($config['columns'] as $column => $column_config)
          @if($config['use_form_columns'])
            @if(!in_array($column, $config['hideInEdit']) and in_array($column_config['type'], \Config::get('scaffenger.config.form_left_column_types')))
              {!! Column::toFormField($table, $column) !!}
            @endif
          @else
            @if(!in_array($column, $config['hideInEdit']))
              {!! Column::toFormField($table, $column) !!}
            @endif
          @endif
        @endforeach
      </div>
      @if(isset($config['has_media']))
        <div class="tab-pane" id="media">
          <ul class="list-inline list-unstyled" id="uploaded_media">
            <li class="dz-preview dz-file-preview" id="template">
              <div class="dz-details">
                <div class="dz-filename"><span data-dz-name></span></div>
                  <div class="dz-size" data-dz-size></div>
                  <img data-dz-thumbnail>
              </div>
              <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
              <div class="dz-success-mark"><span>✔</span></div>
              <div class="dz-error-mark"><span>✘</span></div>
              <div class="dz-error-message"><span data-dz-errormessage></span></div>
            </li>
          </ul>
        </div>
      @endif
    </div>
  </div>
  @if($numOfProperties)
  <div class="col-xs-12 col-md-5">
  <h2>Properties</h2>
  @foreach($config['columns'] as $column => $column_config)
    @if(!in_array($column, $config['hideInEdit']) and in_array($column_config['type'], \Config::get('scaffenger.config.form_right_column_types')))
      {!! Column::toFormField($table, $column) !!}
    @endif
  @endforeach
  </div>
  @endif
</div>
<p>&nbsp;</p>
<div class="row well">
  <div class="col-sm-12">
    <a href="{{url(Session::get('backlink'))}}" title="Back" class="btn btn-warning pull-left"><i class="fa fa-arrow-left"></i> <span class="visible-lg-inline-block">Back</span></a>
    <div class="pull-right">
    <button type="submit" name="submit" value="save" title="Save" class="btn btn-primary btn-effect-ripple"><i class="fa fa-save"></i> <span class="visible-lg-inline-block">Save</span></button>
    <button type="submit" name="submit" tabindex="-1" title="Save and Continue" value="savecontinue" class="btn btn-default btn-effect-ripple"><i class="fa fa-edit"></i> <span class="visible-lg-inline-block">Save and Continue</span></button>
    <button type="submit" name="submit" tabindex="-1" title="Save and Create New" value="savenew" class="btn btn-default btn-effect-ripple"><i class="fa fa-check"></i> <span class="visible-lg-inline-block">Save and Create New</span></button>
    </div>
  </div>
</div>
{!! Form::close() !!}
@stop

@section('js')
@if(isset($config['has_media']))
<script>
var preload_media = false;
var mockFiles = [];
<?php $media_rel_func = Config::get('scaffenger.config.media_rel_func'); ?>
@foreach($object->$media_rel_func()->get() as $medium)
	@if(File::exists(public_path().$medium->path))
  mockFiles.push({ name: '{{basename($medium->path)}}', size: '{{File::size(public_path().$medium->path)}}', path: '{{$medium->path}}', thumb: baseUrl + '{{$medium->path.'?h=40'}}' });
  @endif
@endforeach

if(mockFiles.length > 0) {
	preload_media = true;
}
</script>
@endif
<script src="{{ asset('packages/wislem/scaffenger/js/pages/formsComponents.js') }}"></script>
<script>$(function(){ FormsComponents.init(); });</script>
@stop