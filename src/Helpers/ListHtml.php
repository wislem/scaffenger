<?php namespace Wislem\Scaffenger\Helpers;

use Bkwld\Croppa\Croppa;
use Config;
use \Carbon\Carbon;
use Folklore\Image\Facades\Image;
use Illuminate\Support\Str;
use League\Flysystem\Exception;

class ListHtml
{

    protected $column_html;
    protected $column_config;
    protected $column;
    protected $value;

    public function __construct($column = '', $value = '', $column_config = null, $td_attributes = '')
    {
        $this->column_config = $column_config;

        $this->column = $column;
        $this->value = $value;

        $this->column_html = '<td';
        if ($td_attributes) {
            foreach ($td_attributes as $key => $attr) {
                $this->column_html .= ' ' . $key . '="' . $attr . '" ';
            }
        }
        $this->column_html .= '>' . PHP_EOL;
    }

    public function text()
    {
        $this->column_html .= $this->value . PHP_EOL;
        $this->column_html .= '</td>' . PHP_EOL;

        return $this->column_html;
    }

    public function belongsTo()
    {
        $fc = $this->column_config['relationship']['fc'];
        $fm = $this->column_config['relationship']['fm'];

        $parent_object = $fm::select('id', $fc)->where('id', '=', $this->value)->first();

        $this->column_html .= $parent_object->$ff . PHP_EOL;
        $this->column_html .= '</td>' . PHP_EOL;

        return $this->column_html;
    }

    public function belongsToMany($object = null)
    {
        $column = $this->column;

        $fc = $this->column_config['relationship']['fc'];

        $parent_objects = $object->$column()->orderBy($fc, 'ASC')->lists($fc);

        foreach ($parent_objects as $rel) {
            $this->column_html .= $rel . ' ' . PHP_EOL;
        }
        $this->column_html .= '</td>' . PHP_EOL;

        return $this->column_html;
    }

    public function textarea()
    {
        $this->column_html .= Str::limit($this->value, 50) . PHP_EOL;
        $this->column_html .= '</td>' . PHP_EOL;

        return $this->column_html;
    }


    public function image()
    {
        if ($this->value)
            $this->column_html .= '<a href="' . Config::get('app.url') . $this->value . '" data-toggle="lightbox-image"><img src="' . Image::url(Config::get('app.url') . $this->value, null, 40) . '"></a>' . PHP_EOL;

        $this->column_html .= '</td>' . PHP_EOL;

        return $this->column_html;
    }

    public function bool($object = null, $table = '')
    {
        $column = $this->column;

        $checked = ($this->value) ? true : false;

        $this->column_html .= '<a href="#" title="Toggle state" class="update_value" data-id="' . $table . '-' . $object->id . '-' . $this->column . '" data-value="' . $this->value . '">';
        if ($checked) {
            $this->column_html .= '<i class="fa fa-fw fa-circle text-success"></i>' . PHP_EOL;
        } else {
            $this->column_html .= '<i class="fa fa-fw fa-circle-o text-danger"></i>' . PHP_EOL;
        }
        $this->column_html .= '</a>';

        $this->column_html .= '</td>' . PHP_EOL;

        return $this->column_html;
    }

    public function order($object = null, $table = '')
    {
        $this->column_html .= '<input class="form-control text-center update_value" style="width:60px;" type="text" value="' . $this->value . '" data-id="' . $table . '-' . $object->id . '-' . $this->column . '" />' . PHP_EOL;
        $this->column_html .= '</td>' . PHP_EOL;

        return $this->column_html;
    }

    public function select()
    {
        if (isset($this->column_config['options'][$this->value])) {
            $this->column_html .= $this->column_config['options'][$this->value] . PHP_EOL;
        } else {
            $this->column_html .= '---' . PHP_EOL;
        }

        $this->column_html .= '</td>' . PHP_EOL;

        return $this->column_html;
    }

    public function url()
    {
        $this->column_html .= '<a href="' . $this->value . '" target="_blank">' . $this->value . '</a>' . PHP_EOL;
        $this->column_html .= '</td>' . PHP_EOL;

        return $this->column_html;
    }
}