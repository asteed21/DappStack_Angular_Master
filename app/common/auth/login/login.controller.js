'use strict'

angular.module('dappstackApp.common.auth.login')

    .controller('LoginController', ['ngDialog', '$localStorage', 'authService', function (ngDialog, $localStorage, authService) {
        
        var vm = this;

        vm.loginData = $localStorage.getObject('userinfo','{}');
        
        vm.reject = function(input) {
            vm.onReject({msg:input});
        };

        vm.doLogin = function() {
            if(vm.rememberMe)
                $localStorage.storeObject('userinfo',vm.loginData);
                
            authService.login(vm.loginData);

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
