'use strict';

angular.module('dappstackApp.components.dapps.dappDialog')

    //Include $stateParams to get local route parameter of dappId and use in dappsFactory to populate modal
    .controller('DappDialogController', function(Dapps, $stateParams) {

        //Assign scope as variable
        var vm = this;

        //assign scope access to dapp information
        vm.$onInit = function() {
            vm.dappId = $stateParams.dappId;
            vm.dapp = Dapps.get({id: vm.dappId})
                .$promise.then(
                    function (response) {
                        vm.dapp = response;
                    },
                    function (response) {
                        console.log("Error: " + response.status + " " + response.statusText);
                    }
                );
        }

        //Function to populate social icons with ng-show in dapp-diaolog view
        vm.hasSocial = function(input) {
            if (vm.dapp.socialLinks[input]) {
                return true;
            } else {
                return false;
            }
        };

        // Stateless built-in modal functions from uib-modal to manage close/destroy
        vm.ok = function() {
            vm.close({$value: vm.selected});
        };

        vm.cancel = function() {
            vm.dismiss({$value: 'cancel'});
        };

    });