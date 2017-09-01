'use strict';

angular.module('dappstackApp.common.navBar')

    .controller('NavBarController', ['$state', '$rootScope', 'ngDialog', 'authService', 'DappStackUser', '$localStorage', function($state, $rootScope, ngDialog, authService, DappStackUser, $localStorage) {
        
        var vm = this;

        vm.loggedIn = authService.isAuthenticated();

        vm.isNavCollapsed = true;
        vm.isCollapsed = false;

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
            vm.username = authService.getUserName();
        });
            
        $rootScope.$on('registration:Successful', function() {
            var message = '\
            <div class="ngdialog-message">\
            <div><h3>YOU DID IT!!!</h3></div>' +
            '<div><p>CONGRATULATIONS, YOU SIGNED UP SUCCCESFULLY!!!!!!!!!!!!!!!</p></div>';

            ngDialog.openConfirm({
                template: message, 
                plain: 'true'
            });
        });
        
        vm.stateis = function(curstate) {
            return $state.is(curstate);  
        };
    
    }]);

