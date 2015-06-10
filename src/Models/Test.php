<?php namespace Wislem\Scaffenger\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Test extends Model
{

    protected $fillable = ['*'];
    protected $dates = ['datefield', 'datetimefield'];

    public function media()
    {
        return $this->morphMany('Wislem\Scaffenger\Models\Media', 'mediable');
    }

    public function getDatefieldAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y');
    }

    public function getDatetimefieldAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y H:i:s');
    }

}