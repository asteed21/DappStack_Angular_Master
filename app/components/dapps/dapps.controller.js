'use strict';

angular.module('dappstackApp.components.dapps')

    .controller('DappsController', ['Dapp', function(Dapp) {
        
        var vm = this;
        vm.dapps;

        vm.$onInit = function() {
            //Get dapps list from database
            Dapp.find({
                filter: {
                    limit: vm.limitTo,
                    order: vm.orderBy
                }
            })
            .$promise.then(
                function (response) {
                    vm.dapps = response;
                },
                function (response) {
                    console.log("Error: " + response.status + " " + response.statusText);
                }
            );
        };

    }]);