<?php

use SilverStripe\Dev\FunctionalTest;

/**
 * Description of ApiControllerTest
 *
 * @author Joy
 */
class ApiControllerTest extends FunctionalTest {

    protected static $fixture_file = "DataFixture.yml";

    public function testStatus() {

        $res1 = $this->get("/api/students");
        $this->assertEquals(200, $res1->getStatusCode());
        
        $res2 = $this->get("/api/quests");
        $this->assertEquals(200, $res2->getStatusCode());

        $res3 = $this->get("/api/pathways");
        $this->assertEquals(200, $res3->getStatusCode());        
        
        
    }
    
    public function testJSON() {

        $res1 = $this->get("/api/students");
        json_decode($res1->getBody(), true);
        $this->assertEquals(0, json_last_error());
        
        $res2 = $this->get("/api/quests");
        json_decode($res2->getBody(), true);
        $this->assertEquals(0, json_last_error());        
        
        $res3 = $this->get("/api/pathways");
        json_decode($res3->getBody(), true);
        $this->assertEquals(0, json_last_error());                
        
    }    

}
