'use strict';

angular.module('dappstackApp.components.dapps.dappListItem')

    .component('dappListItem', {
        bindings: {
            dappId: '<',
            name: '<',
            thumbnailDescription: '<',
            logoImage: '<'
        },
        template: require('./dapp-list-item.html'),
        controller: 'DappListItemController',
        controllerAs: 'vm'
    });