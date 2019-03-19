## Installation

- Clone the repository
- then run `composer install` and follow Laravel [documentation](https://laravel.com/docs/5.6)
- and then run `npm install` inside `resources/assets/src/angular-app` directory and follow [Angular CLI Documentation](https://github.com/angular/angular-cli)

## Development server

Rename .env.example to .env or create your own .env
Copy ./testData to ./storage/app
Run `php artisan config:cache` to clean cached files
Run `php artisan serve` for server end. Navigate to `http://localhost:8000/`.
Run `ng serve` for front end. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `./vendor/bin/phpunit --testsuite Feature` to execute the feature tests

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
<br>
If you have any questions please contact me on zglker@gmail.com