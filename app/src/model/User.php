<?php

use SilverStripe\ORM\DataObject;

/**
 * Description of User
 *
 * @author Joy
 */
class User extends DataObject {

    private static $db = [
        "FullName" => "Varchar(255)"
    ];
    
    private static $has_many = [
        'QuestPaths' => Mark::class
    ];      
    
    private static $summary_fields = [
        "ID",
        "FullName"
    ];    

}