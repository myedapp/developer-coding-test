# MyEdOnline - Code Challenge

## Overview

This file contain instructions on how to have a local environment up and running.

## Technology required

* PHP 7.1
* Apache
* Laravel 5.4\
* Composer https://getcomposer.org/
* Node (NPM) http://npmjs.com
* Git https://git-scm.com

## Contact

Author: Paulo Goncalves - contact@paulogoncalves.me
Date: 12/10/2018

## Setup

* Clone the project:
```bash
   git clone https://github.com/myedapp/developer-coding-test
```

* Checkout branch
```bash
   git checkout PauloGoncalves
```

* Starting the server

This project includes 2 separated services, one that runs the backend API and the other to run the Web Backend/ UI Interface. You will need to 2 terminal session to run both server.

1. Start the api backend server 
```bash
    cd api
    composer install    
    npm run start
```
Api should be read on: https://127.0.0.1:3000

2. Start the web server
```
    cd web
    composer install
    php artisan serve
```
 Website should be read on: http://127.0.0.1:8000


* Testing

Because of the simplicity of this project, I made only 2 test cases:

1. Test API endpoint status and content present
2. Test Web view load the elements and element cointain relevant data

To test, simple run:
```
    phpunit
```