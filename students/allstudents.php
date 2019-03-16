<?php

	header("Access-Control-Allow-Origin: *");

	$users_url = '../data/users.json';
	$users = file_get_contents($users_url); 

	echo($users);

?>