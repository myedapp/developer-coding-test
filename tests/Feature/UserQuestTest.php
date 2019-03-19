<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserQuestTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $response = $this->get('/api/quests/1');

        $response->assertStatus(200);

        $response = $this->get('/api/quests/5');

        $response->assertStatus(200);
        $response = $this->get('/api/quests/6');

        $response->assertStatus(500);

    }
}
