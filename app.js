
(function() {

    var studentsApp = angular.module('studentsApp', ['ngRoute', 'ngAnimate']);

    studentsApp.config(function($routeProvider){
        $routeProvider
            .when('/',{
                controller: 'StudentsController',
                templateUrl: 'views/students.html'
            })
            .otherwise({ redirectTo: '/'});
    });

}())
