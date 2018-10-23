<?PHP
header('Content-Type: application/json');

if($_REQUEST['data'] == 'quest_pathways'){
	echo file_get_contents("quest_pathways.json");

} else if($_REQUEST['data'] == 'users'){
	echo file_get_contents("users.json");

}