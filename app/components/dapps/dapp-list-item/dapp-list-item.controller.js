'use strict';

angular.module('dappstackApp.components.dapps.dappListItem')

    .controller('DappListItemController', function($uibModal) {
        
        this.open = function(items) {

            var modalInstance = $uibModal.open( {
                component: 'dappDialogComponent',
                size: 'lg'
            })
        };
    });