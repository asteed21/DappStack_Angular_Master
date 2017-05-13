'use strict'

angular.module('dappstackApp.common.auth.register')
    
    .controller('RegisterController', ['$scope', 'ngDialog', '$localStorage', 'authService', function ($scope, ngDialog, $localStorage, authService) {
        
        $scope.register={};
        $scope.loginData={};
        
        $scope.doRegister = function() {

            authService.register($scope.registration);
            
            ngDialog.close();

        };
    }]);
