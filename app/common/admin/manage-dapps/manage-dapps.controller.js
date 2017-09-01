'use strict'

angular.module('dappstackApp.common.admin.manageDapps')

    .controller('ManageDappsController', ['$window', 'Dapp', function ($window, Dapp) {
        
        var vm = this;

        vm.dapps;

        function getDapps() {
            Dapp.find({limit: 25, skip: 25}).$promise.then(
                function(response) {
                    vm.dapps = response;
                },
                function(response) {
                    console.log('Error: ' + response);
                }
            )
        }

        getDapps();

        vm.deleteDapp = function(dappId, dappIndex) {
            var confirmDelete = $window.confirm('Are you sure you want to delete this Dapp? This cannot be undone.');

            if (confirmDelete) {
                Dapp.deleteById({id: dappId}).$promise.then(
                    function(response) {
                        vm.dapps.splice(dappIndex, 1);
                    },
                    function(response) {
                        console.log('Error: ' + response);
                    }
                )
            }
        }
    }]);
