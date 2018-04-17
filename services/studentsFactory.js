(function(){

    var studentsFactory = function($http){

        var factory = {};

        factory.getStudents = function () {
            return $http.get('users.json');
        };

        factory.getPathways = function() {
            return $http.get('quest_pathways.json');
        }

        return factory;
    } ;

    studentsFactory.$inject = ['$http'];

    angular.module('studentsApp')
        .factory('studentsFactory', studentsFactory);


}());