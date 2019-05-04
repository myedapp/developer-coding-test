<?php

use SilverStripe\ORM\DataObject;
use SilverStripe\ORM\FieldType\DBInt;

/**
 * Description of Mark
 *
 * @author User
 */
class Mark extends DataObject {

    private static $db = [
        "Submitted" => "Boolean",
        "Completion" => DBInt::class,
        "Mark" => "Varchar(255)"
    ];
    
    private static $has_one = [
        'User' => 'User',
        'Quest' => 'Quest'
    ];
    
    private static $summary_fields = [
        "User.FullName"=>"User",
        "Quest.Name"=>"Quest",
        "Submitted.NiceAsBoolean"=>"Submitted",
        "Completion"=>"Completion",
        "Mark"=>"Mark"
    ];    

}