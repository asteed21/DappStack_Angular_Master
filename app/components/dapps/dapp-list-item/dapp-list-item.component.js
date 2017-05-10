'use strict';

angular.module('dappstackApp.components.dapps.dappListItem')

    .component('dappListItem', {
        bindings: {
            dappId: '<'
        },
        require: {
            dappsCtrl: '^dapps'
        },
        templateUrl: './components/dapps/dapp-list-item/dapp-list-item.html',
        controller: 'DappListItemController',
        controllerAs: 'vm'
    });