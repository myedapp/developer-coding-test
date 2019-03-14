<?php 

class ApiClass{
	
	// get method to get the data
	public function getData($filepath){
		
		// Get the contents of the JSON file 
		
		$contents = file_get_contents($filepath);
		$arrayContents = json_decode($contents, true);
		
		return $arrayContents;
		
	}
	
	
	
}