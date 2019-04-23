<?php

use SilverStripe\View\Requirements;
/**
 * Description of StudentQuestPage
 *
 * @author Joy
 */
class StudentQuestPage extends Page {

    private static $singular_name = 'Student Quest Page';
    
}

class StudentQuestPageController extends PageController {
    

    public function init() {
        
        parent::init();
        
        Requirements::javascript("//ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.min.js");
        Requirements::javascript($this->ThemeDir(). "/javascript/StudentQuestPage.js");                 

    }        
    
    
}    