'use strict';

angular.module('dappstackApp.common.navBar')

    .controller('NavBarController', ['$scope', '$state', '$rootScope', 'ngDialog', 'authService', function($scope, $state, $rootScope, ngDialog, authService) {
        
        var vm = this;

        vm.loggedIn = false;
        vm.username = '';
        
        if(authService.isAuthenticated()) {
            vm.loggedIn = true;
            vm.username = authService.getUsername();
        }

        vm.openLogin = function () {
            ngDialog.open({ template: 'common/auth/login/login.html', scope: $scope, className: 'ngdialog-theme-default', controller:"LoginController" });
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

