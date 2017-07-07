'use strict';

angular.module('dappstackApp.components.dapps.dappListItem')

    .component('dappListItem', {
        bindings: {
            dappId: '<',
            name: '<',
            thumbnailDescription: '<',
            logoImage: '<'
        },
        templateUrl: './components/dapps/dapp-list-item/dapp-list-item.html',
        controller: 'DappListItemController',
        controllerAs: 'vm'
    });