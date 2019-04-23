<?php

use SilverStripe\ORM\DataObject;
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Quest
 *
 * @author User
 */
class Quest extends DataObject {

    private static $db = [
        "Name" => "Varchar(255)",
        "IsActive" => "Boolean",
    ];
    
    private static $summary_fields = [
        "Name"=>"Name",
        "IsActive.NiceAsBoolean"=>"Is Active"
    ];
    
    
}