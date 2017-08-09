'use strict';

angular.module('dappstackApp.components.dapps.dappDialog')

    //Include $stateParams to get local route parameter of dappId and use in dappsFactory to populate modal
    .controller('DappDialogController', ['Dapp', '$state', '$stateParams', '$rootScope', function(Dapp, $state, $stateParams, $rootScope) {

        //Assign scope as variable
        var vm = this;
        vm.dappId = $stateParams.dappId;

        //assign scope access to dapp information
        vm.$onInit = function() {
            vm.dapp = Dapp.get({id: vm.dappId})
                .$promise.then(
                    function (response) {
                        vm.dapp = response;
                        
                        //Function to populate social icons with ng-show in dapp-diaolog view
                        vm.hasSocial = function(input) {
                            if (vm.dapp.socialLinks[input]) {
                                return true;
                            } else {
                                return false;
                            }
                        };
                    },
                    function (response) {
                        console.log("Error: " + response.status + " " + response.statusText);
                    }
                );
        }

        vm.goBack = function() {
            if ($rootScope.previousState) {
                $state.go($rootScope.previousState);
            } else {
                $state.go('^');   
            }
        }
        
    }]);