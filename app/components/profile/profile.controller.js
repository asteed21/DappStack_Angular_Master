'use strict';

angular.module('dappstackApp.components.profile')

    .controller('ProfileController', ['$state','DappStackUser','$rootScope','authService', function($state, DappStackUser, $rootScope, authService) {
        
        var vm = this;
        vm.loggedIn = authService.isAuthenticated();

        DappStackUser.findOne({id: $rootScope.currentUser.id})
        .$promise.then(
            function (response) {
                vm.user = response;
                console.log(vm.user);
            },
            function (response) {
                console.log("Error: " + response.status + " " + response.statusText);
            }
        );

        if (authService.isAuthenticated());

        $rootScope.$on('login:Successful', function() {
            vm.getUserInfo();
            vm.loggedIn = authService.isAuthenticated();
        });
            
        $rootScope.$on('registration:Successful', function() {
            vm.loggedIn = authService.isAuthenticated();
        });

        $rootScope.$on('logout:Successful', function() {
            vm.loggedIn = authService.isAuthenticated();
        });

    }]);