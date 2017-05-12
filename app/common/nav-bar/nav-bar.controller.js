'use strict';

angular.module('dappstackApp.common.navBar')

    .controller('NavBarController', function($state, $rootScope, authService) {
        
        var vm = this;

        vm.loggedIn = false;
        vm.username = '';
        
        if(authService.isAuthenticated()) {
            vm.loggedIn = true;
            vm.username = authService.getUsername();
        }
            
        vm.openLogin = function () {
            //ngDialog.open({ template:'<login></login>', plain: true, className: 'ngdialog-theme-default'});
        };
        
        vm.logOut = function() {
            authService.logout();
            vm.loggedIn = false;
            vm.username = '';
        };
        
        $rootScope.$on('login:Successful', function () {
            vm.loggedIn = authService.isAuthenticated();
            vm.username = authService.getUsername();
        });
            
        $rootScope.$on('registration:Successful', function () {
            vm.loggedIn = authService.isAuthenticated();
            vm.username = authService.getUsername();
        });
        
        vm.stateis = function(curstate) {
            return $state.is(curstate);  
        };
    
    });

