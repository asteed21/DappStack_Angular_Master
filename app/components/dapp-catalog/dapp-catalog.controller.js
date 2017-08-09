'use strict';

angular.module('dappstackApp.components.dappCatalog')

    .controller('DappCatalogController', ["$stateParams", function($stateParams) {

        var vm = this,
            previousTags = vm.selectedTags,
            previousStatuses = vm.statusesSelected;

        vm.$onInit = function() {
            vm.query = $stateParams.q;
            vm.category;
            vm.selectedTags;
            vm.statusesSelected;
        }; 

        //check for array changes in status and tags
        vm.$doCheck = function(){
            if(!angular.equals(previousTags, vm.selectedTags)) {
                previousTags = vm.selectedTags;
                vm.selectedTags = angular.copy(vm.selectedTags);
            }
            if(!angular.equals(previousStatuses, vm.statusesSelected)) {
                previousStatuses = vm.statusesSelected;
                vm.statusesSelected = angular.copy(vm.statusesSelected);
            }
        };
    }]);