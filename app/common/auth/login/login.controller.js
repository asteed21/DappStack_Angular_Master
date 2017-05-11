'use strict'

angular.module('dappstackApp.common.auth.register')

    .controller('LoginController', function ($state, authService) {
        
        var vm = this;

        vm.login = function () {
            authService.login(this.username, this.password).then(function (response) {
                $location.path('/home');
                console.log(response);
            }, function (err) {
                alert(err.data.error.message);
                console.log(err);
            });
        };
    });