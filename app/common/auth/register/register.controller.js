'use strict'

angular.module('dappstackApp.common.auth.register')
    
    .controller('RegisterController', ['ngDialog', '$localStorage', 'authService', '$rootScope', function (ngDialog, $localStorage, authService, $rootScope) {
        
        var vm = this;

        vm.register={};
        vm.loginData={};
        
        vm.reject = function() {
            ngDialog.close();
        };

        vm.doRegister = function() {

            authService.register(vm.registration);
            
            vm.$on('registration:Successful', function() {
                var message = '<div class="ngdialog-message">\
                    <div><h3>Registration Unsuccessful</h3></div>' +
                    '<div><p>' +  response.data.error.message + 
                    '</p><p>' + response.data.error.name + '</p></div>';

                ngDialog.openConfirm({ template: message, plain: 'true'});
            
            authService.login(vm.loginData);

            ngDialog.close();
        });
            ngDialog.close();

        };
    }]);
