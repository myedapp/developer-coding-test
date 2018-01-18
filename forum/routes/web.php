<?php


/*
* get all questions api_route
*/
Route:: get('/students/questions/all','StudentController@getAllQuestions_api');

/*
* get all studetns api_route
*/
Route:: get('/students/all','StudentController@getAllStudents_api');


/*
* Route to make sure routing is handeled by the vue router
*/
Route::get('/{vue_capture?}', function () {
    return view('app');
})->where('vue_capture', '[\/\w\.-]*');
