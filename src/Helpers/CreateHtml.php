<?php namespace Wislem\Scaffenger\Helpers;

use Form;
use Input;

class CreateHtml
{

    protected $column;
    protected $column_html;
    protected $column_config;

    protected $html_attributes;
    protected $field_classes;

    protected $errors;

    public function __construct($column = '', $column_config = null, $field_attributes = [], $field_classes = [])
    {
        $this->errors = (\Session::has('errors')) ? \Session::get('errors') : null;

        $this->column = $column;
        $this->column_config = $column_config;
        //Load non-class attibutes first
        $this->html_attributes = $field_attributes;
        $this->field_classes = $field_classes;
    }

    public function text($column)
    {
        //Merge attributes with field classes + bootstrap's form-control
        $this->html_attributes += ['class' => 'form-control ' . $this->field_classes];

        $has_error = ($this->errors and $this->errors->has($column)) ? true : false;

        $this->column_html = '<div class="form-group' . ($has_error ? ' has-error' : '') . '">' . PHP_EOL;
        $this->column_html .= Form::label($this->column, $this->column_config['label']);
        $this->column_html .= Form::text($this->column, Input::old($column), $this->html_attributes);
        $this->column_html .= $has_error ? $this->errors->first($column, '<span class="help-block">:message</span>') : '';
        $this->column_html .= '</div>';

        return $this->column_html;
    }

    public function belongsTo($column)
    {
        $fc = $this->column_config['relationship']['fc'];
        $fm = $this->column_config['relationship']['fm'];

        $parent_objects = $fm::orderBy($fc, 'ASC')->lists($fc, 'id');

        //Merge attributes with field classes + bootstrap's form-control
        $this->html_attributes += ['class' => 'form-control chosen-select ' . $this->field_classes];

        $this->column_html = '<div class="form-group">' . PHP_EOL;
        $this->column_html .= Form::label($column, $this->column_config['label']) . PHP_EOL;
        $this->column_html .= Form::select($column, ['' => '---'] + $parent_objects, Input::old($column), $this->html_attributes) . PHP_EOL;
        $this->column_html .= '</div>' . PHP_EOL;

        return $this->column_html;
    }

    public function belongsToMany($column)
    {
        $fc = $this->column_config['relationship']['fc'];
        $fm = $this->column_config['relationship']['fm'];

        $parent_objects = $fm::orderBy($fc, 'ASC')->lists($fc, 'id');

        //Merge attributes with field classes + bootstrap's form-control
        $this->html_attributes += ['id' => 'column', 'multiple' => 'multiple', 'class' => 'form-control chosen-select ' . $this->field_classes];

        $this->column_html = '<div class="form-group">' . PHP_EOL;
        $this->column_html .= Form::label($column, $this->column_config['label']) . PHP_EOL;
        $this->column_html .= Form::select($column . '[]', $parent_objects, Input::old($column), $this->html_attributes) . PHP_EOL;
        $this->column_html .= '</div>' . PHP_EOL;

        return $this->column_html;
    }

    public function slug($column)
    {
        //Merge attributes with field classes + bootstrap's form-control
        $this->html_attributes += ['readonly' => 'readonly', 'class' => 'form-control ' . $this->field_classes];

        $this->column_html = '<div class="form-group">' . PHP_EOL;
        $this->column_html .= Form::label($this->column, $this->column_config['label']) . PHP_EOL;
        $this->column_html .= '<div class="input-group">' . PHP_EOL;
        $this->column_html .= Form::text($this->column, Input::old($column), $this->html_attributes) . PHP_EOL;
        $this->column_html .= '<span class="input-group-btn">';
        $this->column_html .= '<button class="btn btn-primary enable_slug" data-id="' . preg_quote($column, '/') . '" type="button" title="Edit"><i class="fa fa-edit"></i></button>' . PHP_EOL;
        $this->column_html .= '</span>' . PHP_EOL;
        $this->column_html .= '</div>' . PHP_EOL;
        $this->column_html .= '</div>' . PHP_EOL;

        return $this->column_html;
    }

    public function textarea($column)
    {
        //Merge attributes with field classes + bootstrap's form-control
        $this->html_attributes += ['class' => 'form-control ' . $this->field_classes];

        $this->column_html = '<div class="form-group">' . PHP_EOL;
        $this->column_html .= Form::label($this->column, $this->column_config['label']);
        $this->column_html .= Form::textarea($this->column, Input::old($column), $this->html_attributes);
        $this->column_html .= '</div>';

        return $this->column_html;
    }

}