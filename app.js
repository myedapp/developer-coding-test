
(function() {

    var studentsApp = angular.module('studentsApp', ['ngRoute']);

    studentsApp.config(function($routeProvider){
        $routeProvider
            .when('/',{
                controller: 'StudentsController',
                templateUrl: 'views/students.html'
            })
            .otherwise({ redirectTo: '/'});
    });

}())
