'use strict';

angular.module('dappstackApp.components.dappCatalog')

    .controller('DappCatalogController', ['$stateParams', function($stateParams) {

        var vm = this;
        vm.query = $stateParams.q; //passed from state parameters
        vm.heading = "Dapps matching " + '"' + vm.query + '"'; //update dapp list heading
    }]);