'use strict';

angular.module('dappstackApp.components.dapps.dappListItem')

    .controller('DappListItemController', function($uibModal) {
        
        var $ctrl = this;

        $ctrl.items = ['item1', 'item2', 'item3'];
        
        $ctrl.open = function() {

            var modalInstance = $uibModal.open({
                component: 'dappDialogComponent',
                size: 'lg',
                resolve: {
                    items: function () {
                    return $ctrl.items;
                    }
                }   
            })
        };
    });