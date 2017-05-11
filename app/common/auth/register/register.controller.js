'use strict'

angular.module('dappstackApp.common.auth.register')
    
    .controller('RegisterController', function(authService, $state) {

        var vm = this;

        vm.register={};
        vm.loginData={};
        
        vm.doRegister = function() {
            authService.register(vm.registration);
            ngDialog.close();
        };

    });
