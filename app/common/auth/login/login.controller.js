'use strict'

angular.module('dappstackApp.common.auth.login')

    .controller('LoginController', function ($uibModal, $localStorage, authService) {
        
        var vm = this;

        vm.loginData = $localStorage.getObject('userinfo','{}');
        
        vm.doLogin = function() {
            if(vm.rememberMe)
            $localStorage.storeObject('userinfo',vm.loginData);

            authService.login(vm.loginData);

            //ngDialog.close();

        };
                
        vm.openRegister = function () {
            //ngDialog.open({ template: 'views/register.html', scope: vm, className: 'ngdialog-theme-default', controller:"RegisterController" });
        };
    });