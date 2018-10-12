<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testApiResponse()
    {
    
        $client = new \GuzzleHttp\Client();
        $response = $client->get(config('app.external_url'));
        $r = $response->getBody()->getContents();
        $json = json_decode($r, true);

        // Response code
        $this->assertEquals(200,$response->getStatusCode());

        // Content exist
        $this->assertGreaterThan(0,count($json));
    
    }
}
