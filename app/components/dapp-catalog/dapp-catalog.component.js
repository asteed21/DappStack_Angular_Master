angular.module('dappstackApp.components.dappCatalog')

    .component('dappCatalog', {
        template: require('./dapp-catalog.html'),
        controller: 'DappCatalogController',
        controllerAs: 'vm'
    });