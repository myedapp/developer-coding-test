var app = angular.module("app", []);
app.controller('thectrl', function ($scope, $http) {
	var config = {
	    headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}
	};
	$http.get('get.php?data=users', config)
		.then(function(response) {
			$scope.users = response.data;
//			console.log($scope.users);
		},
		function(response) {
		});

	$http.get('get.php?data=quest_pathways', config)
		.then(function(response) {
			$scope.quest_pathways = response.data;
		},
		function(response) {
		});
});
