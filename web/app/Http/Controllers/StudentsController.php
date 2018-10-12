<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helper\ApiHelper as API;

class StudentsController extends Controller
{

    public function index()
    {
     
        return view('students-marks', [
            'sMarks' => API::requestStudentsMarks(),
            'title' => 'Students Marks'
        ]);

    }

}
