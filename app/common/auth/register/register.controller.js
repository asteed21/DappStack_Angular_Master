'use strict'

angular.module('dappstackApp.common.auth.register')
    
    .controller('RegisterController', ['$scope', 'ngDialog', '$localStorage', 'authService', '$rootScope', function ($scope, ngDialog, $localStorage, authService, $rootScope) {
        
        $scope.register={};
        $scope.loginData={};
        
        $scope.doRegister = function() {

            authService.register($scope.registration);
            
            $rootScope.$on('registration:Successful', function() {
                var message = '<div class="ngdialog-message">\
                    <div><h3>Registration Unsuccessful</h3></div>' +
                    '<div><p>' +  response.data.error.message + 
                    '</p><p>' + response.data.error.name + '</p></div>';

                ngDialog.openConfirm({ template: message, plain: 'true'});
            
            authService.login($scope.loginData);

            ngDialog.close();
        });
            ngDialog.close();

        };
    }]);
