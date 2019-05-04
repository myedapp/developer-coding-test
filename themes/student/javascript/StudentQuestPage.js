var app = angular.module('myApp', []);
app.controller('questCtrl', function($scope, $http) {
  $http.get("http://martine/api/pathways", {cache: false}).then(function(response) {
    $scope.questData = response.data;
  });
  
  $http.get("http://martine/api/students", {cache: false}).then(function(response) {
    $scope.studentData = response.data;
  });  
});

app.directive('studentname', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            scope.userid = attrs.userid;
            scope.studentname = '';
            
            scope.$watch('studentData', function() {
                scope.studentData.forEach(function(item){
                    if (scope.userid == item.id) {
                        scope.studentname = item.fullname;
                    }
                });                                    

            });            
            
            
        },
        template: '{{studentname}}'
    }    
});

//app.directive('studentname', function(element, attributes) {
//   var directive = {};
//   directive.restrict = 'E';
//   directive.template = "<b>Names {{studentname.userid}} </b>";  
//   
//   console.log(123);
//
//   directive.scope = {
//      studentname : "=userid"
//   };
//   directive.compile = function(element, attributes) {
//      element.css("border", "1px solid #cccccc");
//
//      var linkFunction = function($scope, element, attributes) {
//         element.html("Student: <b>"+$scope.studentData.name +"</b>");
//         element.css("background-color", "#ff00ff");
//      };
//      return linkFunction;
//   };
//
//   return directive;
//});


