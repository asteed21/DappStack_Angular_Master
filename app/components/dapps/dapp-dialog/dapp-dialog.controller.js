'use strict';

angular.module('dappstackApp.components.dapps.dappDialog')

    .controller('DappDialogController', function(dappsFactory) {

        /* 
        Assign scope as variable and pass resolutions from list item controller
         */
        var vm = this;
        vm.dappId = vm.resolve.dappId;
        vm.dapp = vm.resolve.dapp;

        vm.hasSocial = function(input) {
            if (vm.dapp.socialLinks[input]) {
                return true;
            } else {
                return false;
            }
        };

        /* Stateless modal functions */
        vm.ok = function() {
            vm.close({$value: vm.selected});
        };

        vm.cancel = function() {
            vm.dismiss({$value: 'cancel'});
        };

    });