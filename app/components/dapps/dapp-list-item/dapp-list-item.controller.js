'use strict';

angular.module('dappstackApp.components.dapps.dappListItem')

    .controller('DappListItemController', function($uibModal) {
        
        var vm = this;

        vm.open = function(dapps) {

            var modalInstance = $uibModal.open( {
                component: 'dappDialogComponent',
                size: 'lg',
                resolve: {
                    dapp: function () {
                        return vm.dapp;
                    },
                    dappId: function() {
                        return vm.dappId;
                    }
                }
            })
        };
    });