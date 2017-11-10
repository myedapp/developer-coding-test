<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quest extends Model
{
    //
    public function results()
    {
        return $this->hasMany(Result::class);
    }

}
