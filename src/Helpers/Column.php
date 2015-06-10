<?php namespace Wislem\Scaffenger\Helpers;

use Config;

class Column
{

    public static function toList($object, $table = '', $column = '')
    {
        //Get the column's configuration
        $column_config = Config::get('scaffenger.tables.' . $table . '.columns.' . $column);

        $td_attributes = isset($column_config['attributes']['inList']) ? $column_config['attributes']['inList'] : null;

        $listHtml = new ListHtml($column, $object->$column, $column_config, $td_attributes);

        $column_html = '';

        switch ($column_config['type']) {
            case 'fk':
                switch ($column_config['relationship']['type']) {
                    case 'belongsTo':
                        $column_html = $listHtml->text();
                        break;

                    case 'belongsToMany':
                        $column_html = $listHtml->belongsToMany($object);
                        break;
                }
                break;

            case 'textarea':
            case 'wysiwyg':
                $column_html = $listHtml->textarea();
                break;

            case 'image':
                $column_html = $listHtml->image();
                break;

            case 'bool':
                $column_html = $listHtml->bool($object, $table);
                break;

            case 'order':
                $column_html = $listHtml->order($object, $table);
                break;

            case 'select':
                $column_html = $listHtml->select();
                break;

            case 'url':
                $column_html = $listHtml->url();
                break;

            default:
                $column_html = $listHtml->text();
                break;
        }

        return $column_html;
    }

    public static function toFormField($table = '', $column = '')
    {
        //Get the column's configuration
        $column_config = Config::get('scaffenger.tables.' . $table . '.columns.' . $column);
        $field_attributes = isset($column_config['attributes']['inForm']) ? $column_config['attributes']['inForm'] : [];

        $formHtml = new FormHtml($column, $column_config, $field_attributes);

        switch ($column_config['type']) {
            case 'fk':
                switch ($column_config['relationship']['type']) {
                    case 'belongsTo':
                        $column_html = $formHtml->belongsTo($column);
                        break;

                    case 'belongsToMany':
                        $column_html = $formHtml->belongsToMany($column);
                        break;
                }
                break;

            case 'image':
                $column_html = $formHtml->image($column, Config::get('scaffenger.tables.' . $table . '.model'), \Form::getValueAttribute('id'));
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
                $column_html = $formHtml->order($column, Config::get('scaffenger.tables.' . $table . '.model'));
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