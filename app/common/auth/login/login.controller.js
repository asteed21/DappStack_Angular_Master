'use strict'

angular.module('dappstackApp.common.auth.login')

    .controller('LoginController', function ($localStorage, authService) {
        
        var vm = this;

        vm.loginData = $localStorage.getObject('userinfo','{}');
        
        vm.doLogin = function() {
            if(vm.rememberMe)
            $localStorage.storeObject('userinfo',vm.loginData);

            authService.login(vm.loginData);

            ngDialog.close();

        };
                
        vm.openRegister = function () {
            //ngDialog.open({ template:'<register></register>', plain: true, className:'ngdialog-theme-default'});
        };
    });