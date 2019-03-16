<?php	
	header("Access-Control-Allow-Origin: *");

	$student_id = $_POST["id"];

	$quests_url = '../data/quest_pathways.json'; 
	$quests = file_get_contents($quests_url); 
	$quests_arr = json_decode($quests, true); 

	foreach ($quests_arr as $value) {
		if($value['user_id'] == $student_id){
			echo json_encode($value);
		}
	}



?>