<?php
/**
 * Author: Joshua Carter
 * Created: 25/01/2018
 */

//allows local post requests
header("Access-Control-Allow-Origin: *");

/**
 * Enum-like object for file types
 */
class FileType {
	const JSON = "json_file";
}

/**
 * Echos an error message back to the client
 * message [string]: the message to send
 */
function echo_err($message) {
	//create json message
	$data = [];
	array_push($data, array(
		"error" => $message
	));

	//echo to client
	echo json_encode($data);
}

/**
 * Echos the contents of the request file
 * Returns: 1 if success, else 0
 */
function serve_json_file($file) {
	//get list of files that can be served
	$served_files = scandir("./served_files");

	//if requested file is a match
	if(in_array($file, $served_files)) {
		//get file contents
		$file_data = file_get_contents("./served_files/" . $file);
		//echo to client
		echo $file_data;
		return 1;
	}
	//else not a valid file request
	else {
		//throw error at client
		echo_err("requested file could not be found.");
		return 0;
	}
}

/**
 * Entry point for program, handles all post requests
 * Return: 1 on successful handing of request, else 0
 */
function main() {
	//get raw json data
	$json_raw = file_get_contents("php://input");

	//check for valid request data
	if($json_raw === false) {
		//throw error at client
		echo_err("request missing or invalid.");
		return 0;
	}

	//decode into assoc array
	$json_data = json_decode($json_raw, true);

	//check for decode failure
	if($json_data === null) {
		//throw error at client
		echo_err("request must be valid json format.");
		return 0;
	}

	//is request for a json file?
	if(isset($json_data[FileType::JSON])) {
		//process file request
		return serve_json_file($json_data[FileType::JSON]);
	}

	//json data did not match a valid request
	echo_err("unable to process request.");
	return 0;
}

//execute script
main();

?>