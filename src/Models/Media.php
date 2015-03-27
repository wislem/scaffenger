<?php namespace Wislem\Scaffenger\Models;

use Illuminate\Database\Eloquent\Model;

class Media extends Model {

	protected $table = 'media';

  protected $fillable = ['name', 'path', 'is_active', 'ordr'];

	public static function boot()
	{
		parent::boot();

    static::deleting(function($medium)
    {
			\File::delete($medium->path);
    });
	}

	public function mediable()
	{
		return $this->morphTo();
	}

}