# Laravel Implementation of MyEd Development Task

A basic demonstration of MyEd coding task using Laravel + MySQL + Vue.js.

## Requirements
```
PHP
Composer
MySQL
```

## Installation

Run `composer install`.

Copy ".env.example" to a new file ".env" and edit parameters to suit your environment.

Run `php artisan key:generate`.

Import the MySQL database using `mysql -u <db_username> <database_name> < myed_backup.sql`
(or feel free to manually add your own data using MySQL or php artisan tinker,
but be sure to first run `php artisan migrate`). 

## Running

Run `php artisan serve` to fire up the local server (default `http://127.0.0.1:8000`).

Navigate to one of the two endpoints:

E.g. 
```
http://127.0.0.1:8000/user_results
http://127.0.0.1:8000/quest_results
```

