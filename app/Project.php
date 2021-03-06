<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use App\Task;

class Project extends Model
{
    protected $table = 'project';

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
