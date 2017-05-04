'use strict';

angular.module('dappstackApp.components.dapps.dappDialog')

    .controller('DappDialogController', function(dappsFactory) {

        /* 
        Assign scope as variable and pass resolutions from list item controller
         */
        var vm = this;

        vm.$onInit = function() {
            vm.dappId = vm.resolve.dappId;
            vm.selected = vm.resolve.dapp;

            /* Get relevant dapp data for modal with dapps factory call, assign to dapp propert of controller */
            dappsFactory.getDapp(vm.dappId).then(function(data) {
                vm.dapp = data;
            }).catch(function() {
                vm.error = "Can't retrieve DApp data."; 
            }).then(function() {
            /* Controller methods requiring vm.dapp data */
                vm.hasSocial = function(input) {
                    if (vm.dapp.socialLinks[input]) {
                        return true;
                    } else {
                        return false;
                    }
                }
            })
        }

        /* Stateless modal functions */
        vm.ok = function() {
            vm.close({$value: vm.selected});
        };

        vm.cancel = function() {
            vm.dismiss({$value: 'cancel'});
        };

    });