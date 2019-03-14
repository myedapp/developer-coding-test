<?php 
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS'); 
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');
include_once 'ApiClasses/apiClass.php';
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}
if(isset($_GET['f'])){
$headers = apache_request_headers();

if(isset($headers['Authorization']))
{	
if($headers['Authorization']=='986Aed091234')
{
switch ($_GET['f'])
{	
case 'getQuest':
getQuest();
break;
case 'getUser':
getUser();
break;	
	
}
}
else
{
	http_response_code(401);
}
}
else
{
	http_response_code(400);
}
}


function getQuest()
{
	
	$filepath='assets/quest_pathways.json';
	$dataObj=new ApiClass();
	$data=$dataObj->getData($filepath);
	echo json_encode($data);
	die();
	
}

function getUser()
{
	
	$filepath='assets/users.json';
	$dataObj=new ApiClass();
	$data=$dataObj->getData($filepath);
	echo json_encode($data);
	die();
	
}