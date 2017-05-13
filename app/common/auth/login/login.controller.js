'use strict'

angular.module('dappstackApp.common.auth.login')

    .controller('LoginController', ['$scope', 'ngDialog', '$localStorage', 'authService', function ($scope, ngDialog, $localStorage, authService) {
        
        $scope.loginData = $localStorage.getObject('userinfo','{}');
        
        $scope.doLogin = function() {
            if($scope.rememberMe)
                $localStorage.storeObject('userinfo',$scope.loginData);
                
            authService.login($scope.loginData);

            ngDialog.close();

        };
                
        $scope.openRegister = function () {
            ngDialog.open({ template: '/common/auth/register/register.html', scope: $scope, className: 'ngdialog-theme-default', controller:"RegisterController" });
        };
        
    }]);
