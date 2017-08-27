'use strict'

angular.module('dappstackApp.common.auth.login')

    .controller('LoginController', ['ngDialog', 'authService', '$localStorage', function (ngDialog, authService, $localStorage) {
        
        var vm = this;

        vm.loginData = $localStorage.getObject('userinfo','{}');
        
        vm.reject = function(input) {
            vm.onReject({msg:input});
        };

        vm.doLogin = function() {
            if (vm.loginData.rememberMe) {
                $localStorage.storeObject('userinfo', vm.loginData);
            }

            authService.login({rememberMe: vm.loginData.rememberMe}, {email: vm.loginData.email, password: vm.loginData.password});

            ngDialog.close();
        };
                
        vm.openRegister = function(vm) {
            ngDialog.close();
            ngDialog.open({
                template: '<register-component></register-component>', 
                scope: vm,
                className: 'ngdialog-theme-default',
                plain: true,
                closeByNavigation: true,
                showClose: false
            });
        };
        
    }]);
