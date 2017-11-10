<?php

namespace App\Http\Controllers;

use App\Quest;
use Illuminate\Http\Request;

class QuestsController extends Controller
{
    //
    public function index()
    {
        $quests = Quest::all();

        return view('results.quests', compact(['quests']));
    }
}
