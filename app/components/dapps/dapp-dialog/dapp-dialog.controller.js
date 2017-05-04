'use strict';

angular.module('dappstackApp.components.dapps.dappDialog')

    .controller('DappDialogController', function(dappsFactory) {

        /* Assign scope as variable and create variable for dapp population */
        var vm = this;
        vm.dapp;

        /* Initialize with resolutions from modal creation (id modal in scope), then create basic modal functions */
        vm.$onInit = function () {
            vm.selected = vm.resolve.dapp;
            vm.dappId = vm.resolve.dappId
        }

        vm.ok = function() {
            vm.close({$value: vm.selected});
        };

        vm.cancel = function () {
            vm.dismiss({$value: 'cancel'});
        };
    
        /* Get relevant dapp data for modal with dapps factory call */
        dappsFactory.getDapp(vm.dappId).then(function(data) {
            vm.dapp = data;
            console.log(vm.dapp)
        });

    });