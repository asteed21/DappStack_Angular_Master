'use strict';

angular.module('dappstackApp.common.navBar')

    .controller('NavBarController', ['$state', '$rootScope', 'ngDialog', 'authService', 'DappStackUser', function($state, $rootScope, ngDialog, authService, DappStackUser) {
        
        var vm = this;

        vm.isNavCollapsed = true;
        vm.isCollapsed = false;

        vm.loggedIn = false;
        vm.username = '';
        
        if(authService.isAuthenticated()) {
            vm.loggedIn = true;
            vm.username = authService.getUsername();
            
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
        }

        vm.openLogin = function(vm) {
            ngDialog.open({ 
                template: '<login-component on-resolve="ngDialog.close()" on-reject="closeThisDialog(msg)"></login-component>', 
                scope: vm,
                className: 'ngdialog-theme-default',
                plain: true,
                closeByNavigation: true,
                showClose: false
            });
        };
        
        vm.logOut = function() {
            authService.logout();
            vm.loggedIn = false;
            vm.username = '';
        };
        
        $rootScope.$on('login:Successful', function() {
            vm.loggedIn = authService.isAuthenticated();
            vm.username = authService.getUsername();
        });
            
        $rootScope.$on('registration:Successful', function() {
            vm.loggedIn = authService.isAuthenticated();
            vm.username = authService.getUsername();
        });
        
        vm.stateis = function(curstate) {
            return $state.is(curstate);  
        };
    
    }]);

