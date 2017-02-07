'use strict';

angular.module('dappstackApp.components.dapps.dappListItem')

    .component('dappListItem', {
        bindings: {
            name: '<',
            thumbnailDescription: '<',
            logoImage: '<',
            numOfLikes: '<'
        },
        templateUrl: './components/dapps/dapp-list-item/dapp-list-item.html',
        controller: 'DappListItemController'
    });