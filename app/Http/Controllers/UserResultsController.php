<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserResultsController extends Controller
{
    //
    public function index()
    {
        $users = User::all();

        return view('results.users', compact(['users']));
    }
}
