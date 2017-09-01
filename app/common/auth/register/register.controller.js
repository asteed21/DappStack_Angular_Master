'use strict'

angular.module('dappstackApp.common.auth.register')
    
    .controller('RegisterController', ['ngDialog', 'authService', function (ngDialog, authService) {
        
        var vm = this;

        vm.registration={};
        
        vm.reject = function() {
            ngDialog.close();
        };

        vm.doRegister = function() {
            authService.register(vm.registration);
            ngDialog.close();
        };
    }]);
