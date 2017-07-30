'use strict';

angular.module('dappstackApp.components.dappCatalog')

    .controller('DappCatalogController', ['$stateParams', 'Dapp', function($stateParams, Dapp) {

        var vm = this,
            query = $stateParams.q; //passed from state parameters
        vm.heading = "Dapps matching " + '"' + vm.query + '"'; //update dapp list heading

        vm.dapps;

        //Get dapps list from database - TODO: work filter into db query
        Dapp.find()
            .$promise.then(
            function (response) {
                vm.dapps = response;

                //TODO - check for how to resolve these without assigning again

                vm.filter = query;
                vm.limit = vm.limitTo;
                vm.order = vm.orderBy;
            },
            function (response) {
                console.log("Error: " + response.status + " " + response.statusText);
            }
        );

    }]);