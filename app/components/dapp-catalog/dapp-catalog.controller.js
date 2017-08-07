'use strict';

angular.module('dappstackApp.components.dappCatalog')

    .controller('DappCatalogController', ["$stateParams", function($stateParams) {

        var vm = this;

        vm.$onInit = function() {
            vm.query = $stateParams.q;
            vm.category;
            vm.selectedTags;
            vm.statusesSelected;
        } 

    }]);