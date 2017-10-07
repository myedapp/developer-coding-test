function myEdCtrl($http) {
    this.$onInit = () => {
        $http.get('/users').then((response) => {
            this.users = response.data;
        });
        $http.get('/quest_paths').then((response) => {
            this.quest_paths = response.data;
        });
    }
    var cachedNames = {};
    this.getUserName = function(id) {
        if (cachedNames[id]) {
            return cachedNames[id];
        }
        var user = this.users.find((user) => {return user.id === id});
        if (user) {
            return cachedNames[id] = user.fullname;
        }
    }
}

angular.module('myEdApp', []).component('myEd', {
    controller: myEdCtrl,
    controllerAs: 'myEdCtrl',
    templateUrl: 'js/templates/myed.html'
});