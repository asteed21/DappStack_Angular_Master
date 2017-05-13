'use strict';

angular.module('dappstackApp.components.dapps')

    .controller('DappsController', ['Dapps', function(Dapps) {
        
        var vm = this;
        vm.dapps;

        Dapps.find()
            .$promise.then(
            function (response) {
                vm.dapps = response;
                console.log(response);
            },
            function (response) {
                console.log("Error: " + response.status + " " + response.statusText);
            }
        );

    }]);