<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $table = 'projects';

    protected $fillable = ['name', 'user_id'];

    public function tasks()
    {
      return $this->hasMany('App\Task')->orderBy('order');
    }

    public static function getProjectsWithTasks()
    {
      return self::where('user_id', Auth::user()->id)->with('tasks')->get();
    }
}
