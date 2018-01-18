<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Storage;

class StudentController extends Controller
{
    /**
     * Extract questions from a json file and return them
     *
     * @return JsonResponse
     */
    public function getAllQuestions_api()
    {	
		$path = storage_path() . "/data/json/quest_pathways.json";
    	$question_data = json_decode(file_get_contents($path), true);

    	return response()->json($question_data);
    }
       /**
     * Extract students from a json file and return them
     *
     * @return JsonResponse
     */
    public function getAllStudents_api()
    {	
    	$path = storage_path() . "/data/json/users.json";
    	$user_data = json_decode(file_get_contents($path), true);

    	return response()->json($user_data);
    }
}
