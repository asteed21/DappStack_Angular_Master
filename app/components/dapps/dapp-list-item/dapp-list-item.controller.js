'use strict';

angular.module('dappstackApp.components.dapps.dappListItem')

    .controller('DappListItemController', function($uibModal) {

        this.open = function() {
            var modalInstance = $uibModal.open({
                component: 'dappDialogComponent'
                //templateUrl: './components/dapps/dapp-dialog/dapp-dialog.html'
            })
        };
    });