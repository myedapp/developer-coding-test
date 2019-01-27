var testingApp = angular.module('testingApp', []);
testingApp.controller('studentController', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
       var users = []; //store users json
       var questPathways = [];  // store questPathways json
       var quests = []; //need to struct this array after fetching the quest_pathways.json
       var loading = true;  //indicate if its loading
       var loadingError = '';  //error message when loading

       // init function 
       $scope.init = function () {
           //initial counter for successful responses from api server
           var jsonLoadedBoth = 0;  //sucessful when it reaches 2 (>1);

           //fetch users.json from api server
           $http.get('http://0.0.0.0:8000/server.php/?file=users')
        	   .then(function successCallback(response) {
                if (response.data.error !== 0) {
                    $scope.loadingError = 'Error ' + response.data.error + ' when loading user data';
                    return;
                }
                var data = response.data.data;
                
                //parse the json data & assign to users
                $scope.users = JSON.parse(data);
                //increased counter by 1
                jsonLoadedBoth += 1;
                if (jsonLoadedBoth > 1)
                   $scope.loading = false;
            }, function errorCallback(response) {
                $scope.loadingError = 'Error ' + response.data.error + ' when loading user data';
            });  
            
           //fetch questPathways.json from api server
            $http.get('http://0.0.0.0:8000/server.php/?file=quest_pathways')
        	   .then(function successCallback(response) {         
                if (response.data.error !== 0) {
                    $scope.loadingError = 'Error ' + response.data.error + ' when loading user data';
                    return;
                }
                   
                var data = response.data.data;
                //parse the json data & assign to questPathways
                $scope.questPathways = JSON.parse(data);
                //increased counter by 1
                jsonLoadedBoth += 1;		
                if (jsonLoadedBoth > 1)
                    $scope.loading = false;

                var questArray = []; //local var to store all unique quests

                //now better to find all quests and keep them unique
                angular.forEach($scope.questPathways, function (val, key) {
                    angular.forEach(val.quest_paths, function (v, k){
                        var existing = $filter('filter')(this, {'id': v.quest.id}, true);

                        //if not pushed yet, push it now
                        if (existing.length == 0) {
                            this.push(v.quest);
                        }
                    }, questArray);
                });
                
                //assign it to quests
                $scope.quests = questArray;
			}, function errorCallback(response) {
                $scope.loadingError = 'Error ' + response.data.error + ' when loading quest data';
            });  
       }; 

       $scope.init();
} ]
);
