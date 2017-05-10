'use strict';

angular.module('dappstackApp.components.dapps.dappListItem')

    .controller('DappListItemController', function($uibModal) {
        
        var vm = this;

        // vm.open = function(dapps) {

        //     var modalInstance = $uibModal.open( {
        //         component: 'dappDialogComponent',
        //         size: 'lg',
        //         resolve: {
        //             instance: function() {
        //                 return vm.dapp;
        //             },
        //             dapp: function () {
        //                 return vm.dappsCtrl.dapps[vm.dappId];
        //             },
        //             dappId: function() {
        //                 return vm.dappId;
        //             }
        //         }
        //     })
        // };
    });