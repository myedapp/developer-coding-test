<?php

use SilverStripe\Control\Controller;

/**
 * The API controller for communication between the SilverStripe backend
 * and the frontend
 * @author Joy
 */
class ApiController extends Controller{
    private static $allowed_actions = [
        "students",
        "quests",
        "pathways"
    ];
    

    /**
    * To fetch students
    * 
    */            
    public function students() {
        
        $userArray = array();
        
        $users = User::get();
        
        foreach ($users as $user) {
            
            $userArray[] = array('id'=>$user->ID,'fullname'=>$user->FullName);
        }
        
        return json_encode($userArray, JSON_NUMERIC_CHECK | JSON_UNESCAPED_SLASHES);
    
    }            
    
    /**
    * To fetch quests
    * 
    */            
    public function quests() {
        
        $questArray = array();
        
        $quests = Quest::get();
        
        foreach ($quests as $quest) {
            
            $questArray[] = array('id'=>$quest->ID,'name'=>$quest->Name,'is_active'=>($quest->IsActive ? true : false));
        }
        
        return json_encode($questArray, JSON_NUMERIC_CHECK | JSON_UNESCAPED_SLASHES);
        
    }       
    
    /**
    * To fetch pathways
    * 
    */            
    public function pathways() {
        
        $userArray = array();
        
        $users = User::get();
        
        foreach ($users as $user) {
            
            $pathway = $user->QuestPaths();
            
            $pathArray = array();
            
            foreach ($pathway as $key => $pathitem) {
                
                $questArr = array();
                if ($pathitem->quest()) {
                    
                    $questArr['id'] = $pathitem->quest()->ID;
                    $questArr['name'] = $pathitem->quest()->Name;
                    
                    if (!$pathitem->quest()->IsActive) {
                        $questArr['is_active'] = false;
                    }
                    
                }
                
                $markArr = array('submitted'=>($pathitem->Submitted ? true : false),'completion'=>$pathitem->Completion,'mark'=>$pathitem->Mark);
                
                $pathArray[] = array('order'=>$key,'quest'=>$questArr,'mark'=>$markArr);
            }
            
            
            
            $userArray[] = array('user_id'=>$user->ID,'quest_paths'=>$pathArray);
        }
        
        return json_encode($userArray, JSON_NUMERIC_CHECK | JSON_UNESCAPED_SLASHES);
        
    }    
    
    
}
