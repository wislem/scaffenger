<?php namespace Wislem\Scaffenger\Helpers;

use Config;

class Column {

  public static function toList($object, $table = '', $column = '')
  {
    //Get the column's configuration
  $column_config = Config::get('scaffenger.tables.'.$table.'.columns.'.$column);

    $td_attributes = isset($column_config['attributes']['inList']) ? $column_config['attributes']['inList'] : null;

    $listHtml = new ListHtml($column_config, $td_attributes);

    switch($column_config['type']) {
      case 'fk':
        switch($column_config['relationship']['type']) {
          case 'belongsTo':
            $column_html = $listHtml->text($object->$column);
            break;

          case 'belongsToMany':
            $column_html = $listHtml->belongsToMany($object, $column);
            break;
        }
        break;

      case 'textarea':
      case 'wysiwyg':
      $column_html = $listHtml->textarea($object->$column);
        break;

      case 'image':
        $column_html = $listHtml->image($object->$column);
        break;

      case 'bool':
        $column_html = $listHtml->bool($object, $table, $column);
        break;

      case 'order':
        $column_html = $listHtml->order($object, $table, $column);
      break;

      case 'select':
        $column_html = $listHtml->select($object->$column);
      break;

      case 'url':
        $column_html = $listHtml->url($object->$column);
       break;

      default:
        $column_html = $listHtml->text($object->$column);
        break;
    }

    return $column_html;
  }

  public static function toFormField($table = '', $column = '')
  {
    //Get the column's configuration
    $column_config = Config::get('scaffenger.tables.'.$table.'.columns.'.$column);
    $field_attributes = isset($column_config['attributes']['inForm']) ? $column_config['attributes']['inForm'] : [];

    $formHtml = new FormHtml($column, $column_config, $field_attributes);

    switch($column_config['type']) {
      case 'fk':
        switch($column_config['relationship']['type']) {
          case 'belongsTo':
            $column_html = $formHtml->belongsTo($column);
            break;

          case 'belongsToMany':
            $column_html = $formHtml->belongsToMany($column);
            break;
        }
        break;

      case 'image':
        $column_html = $formHtml->image($column, Config::get('scaffenger.tables.'.$table.'.model'), \Form::getValueAttribute('id'));
        break;

      case 'slug':
        $column_html = $formHtml->slug($column);
        break;

      case 'textarea':
        $column_html = $formHtml->textarea($column);
        break;

      case 'password':
        $column_html = $formHtml->password($column);
        break;

      case 'select':
        $column_html = $formHtml->select($column);
        break;

      case 'order':
        $column_html = $formHtml->order($column, Config::get('scaffenger.tables.'.$table.'.model'));
        break;

      case 'bool':
        $column_html = $formHtml->bool($column);
        break;

      case 'email':
        $column_html = $formHtml->email($column);
        break;

      case 'url':
        $column_html = $formHtml->url($column);
        break;

      case 'address':
        $column_html = $formHtml->address($column);
        break;

      case 'hidden':
        $column_html = $formHtml->hidden($column);
        break;

      default: //text, image,
        $column_html = $formHtml->text($column);
        break;
    }

    return $column_html;
  }
}