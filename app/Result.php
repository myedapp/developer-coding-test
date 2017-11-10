<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    //
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function quest()
    {
        return $this->belongsTo(Quest::class, 'quest_id');
    }
}
