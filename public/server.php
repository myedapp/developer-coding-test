<?php
/*
This server.php file mock the api services
run command line to make it running:
php -S 0.0.0.0:8000 -t . server.php
*/
try {
   //get the file name from http request
   $filename = strtolower( @$_GET['file']);

   //initilise variables to be responded
   $errorCode = 404;
   $data = array();
   
   //check if the request contains file name
   if (empty($filename) 
   || !in_array($filename, array('users', 'quest_pathways'))) {
      $errorCode = 500;
      throw new Exception("Error");
   }
   
   //valid get requests
   $errorCode = 0;
   $data = file_get_contents('./../' . $filename . '.json');
   $data = preg_replace( "/\r|\n/", "", $data);    

} catch (Exception $e) {
   //something wrong
   unset($e);
}
//construct the response in json 
$response = json_encode( 
       		 array( 'error' => $errorCode,
               		'data' => $data
             		));

//return
echo $response;
