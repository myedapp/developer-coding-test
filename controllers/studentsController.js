(function() {

    var StudentsController = function ($scope,studentsFactory) {

        //calling factory to get json data
        function init() {
            studentsFactory.getStudents()
                .success(function(students) {
                    $scope.students = students;
                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });

            studentsFactory.getPathways()
                .success(function(pathways) {
                    $scope.pathways = pathways;
                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });

        }

        init();


    };

    StudentsController.$inject = ['$scope','studentsFactory'];

    angular.module('studentsApp')
        .controller('StudentsController', StudentsController);

}());