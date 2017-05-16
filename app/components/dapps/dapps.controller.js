'use strict';

angular.module('dappstackApp.components.dapps')

    .controller('DappsController', ['Dapps', function(Dapps) {
        
        var vm = this;
        vm.dapps;

        //Get dapps list from database - TODO: work filter into db query
        Dapps.find()
            .$promise.then(
            function (response) {
                vm.dapps = response;

                //TODO - check for how to resolve these without assigning again
                vm.filterText = vm.filter;
                vm.limit = vm.limitTo;
                vm.order = vm.orderBy;
            },
            function (response) {
                console.log("Error: " + response.status + " " + response.statusText);
            }
        );

    }]);