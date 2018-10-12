<?php

namespace Tests\Feature;

use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testFindStudents()
    {

        $response = $this->get('/');
        $this->assertTrue(strpos($response->getContent(), 'Student:') !== false );
        
        $this->assertTrue(strpos($response->getContent(), 'Completion:') !== false );

    }

}
