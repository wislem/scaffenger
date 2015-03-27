<?php namespace Wislem\Scaffenger\Helpers;

use Bkwld\Croppa\Croppa;
use Config;
use \Carbon\Carbon;
use Folklore\Image\Facades\Image;
use Illuminate\Support\Str;
use League\Flysystem\Exception;

class ListHtml {

  protected $column_html;
  protected $column_config;

  public function __construct($column_config = null, $td_attributes = '') {
    $this->column_config = $column_config;

    $this->column_html = '<td';
    if($td_attributes) {
      foreach($td_attributes as $key => $attr) {
        $this->column_html .= ' ' . $key . '="'.$attr.'" ';
      }
    }
    $this->column_html .= '>'.PHP_EOL;
  }

  public function text($value = '')
  {
    $this->column_html .= $value.PHP_EOL;
    $this->column_html .= '</td>'.PHP_EOL;

    return $this->column_html;
  }

  public function belongsTo($value = '')
  {
    $fc = $this->column_config['relationship']['fc'];
    $fm = $this->column_config['relationship']['fm'];

    $parent_object = $fm::select('id', $fc)->where('id', '=', $value)->first();

    $this->column_html .= $parent_object->$ff.PHP_EOL;
    $this->column_html .= '</td>'.PHP_EOL;

    return $this->column_html;
  }

  public function belongsToMany($object = null, $column = '')
  {
    $fc = $this->column_config['relationship']['fc'];

    $parent_objects = $object->$column()->orderBy($fc, 'ASC')->lists($fc);

    foreach($parent_objects as $rel) {
      $this->column_html .= $rel.' '.PHP_EOL;
    }
    $this->column_html .= '</td>'.PHP_EOL;

    return $this->column_html;
  }

  public function textarea($value = '')
  {
    $this->column_html .= Str::limit($value, 50).PHP_EOL;
    $this->column_html .= '</td>'.PHP_EOL;

    return $this->column_html;
  }


  public function image($value = '')
  {
    if($value)
      $this->column_html .= '<a href="'.Config::get('app.url').$value.'" data-toggle="lightbox-image"><img src="'.Image::url(Config::get('app.url').$value, null, 40).'"></a>'.PHP_EOL;

    $this->column_html .= '</td>'.PHP_EOL;

    return $this->column_html;
  }

  public function bool($object = null, $table = '', $column = '')
  {
    $checked = ($object->$column) ? true : false;

    $this->column_html .= '<a href="#" title="Toggle state" class="update_value" data-id="'.$table.'-'.$object->id.'-'.$column.'" data-value="'.$object->$column.'">';
    if($checked) {
      $this->column_html .= '<i class="fa fa-fw fa-circle text-success"></i>'.PHP_EOL;
    }else {
      $this->column_html .= '<i class="fa fa-fw fa-circle-o text-danger"></i>'.PHP_EOL;
    }
    $this->column_html .= '</a>';

    $this->column_html .= '</td>'.PHP_EOL;

    return $this->column_html;
  }

  public function order($object = null, $table = '', $column = '')
  {
    $this->column_html .= '<input class="form-control text-center update_value" style="width:60px;" type="text" value="'.$object->$column.'" data-id="'.$table.'-'.$object->id.'-'.$column.'" />'.PHP_EOL;
    $this->column_html .= '</td>'.PHP_EOL;

    return $this->column_html;
  }

  public function select($value = '')
  {
    if(isset($this->column_config['options'][$value])) {
      $this->column_html .= $this->column_config['options'][$value] . PHP_EOL;
    }else {
      $this->column_html .= '---'.PHP_EOL;
    }

    $this->column_html .= '</td>'.PHP_EOL;

    return $this->column_html;
  }

  public function url($value = '')
  {
    $this->column_html .= '<a href="'.$value.'" target="_blank">'.$value.'</a>'.PHP_EOL;
    $this->column_html .= '</td>'.PHP_EOL;

    return $this->column_html;
  }
}