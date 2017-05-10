'use strict';

angular.module('dappstackApp.components.dapps')

    .controller('DappsController', function(dappsFactory) {
        
        var vm = this;
        vm.dapps;

        dappsFactory.query(
            function (response) {
                vm.dapps = response;
                console.log(response);
            },
            function (response) {
                vm.message = "Error: " + response.status + " " + response.statusText;
            }
        );

    });