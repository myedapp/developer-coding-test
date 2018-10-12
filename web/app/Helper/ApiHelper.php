<?php

namespace App\Helper;

use \App;
use \GuzzleHttp\Client;

class ApiHelper {

    public static function requestStudentsMarks()
    {

        try {

            $client = new Client();
            $response = $client->get(config('app.external_url'));
            $r = $response->getBody()->getContents();
            $response = json_decode($r, true);
            return $response;

        } catch (\Exception $e) {
            // catch exception
        }

        return json_encode(['result' => false, 'message' => 'failed to retrive the data']);

    }
}
?>
