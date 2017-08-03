angular.module('dappstackApp.components.dappCatalog.dappResultsPanel')

    .component('dappResultsPanel', {
        bindings: {
            category: "<",
            tag: "<",
            query: "<"
        },
        template: require('./dapp-results-panel.html'),
        controller: 'DappResultsPanelController',
        controllerAs: 'vm'
    });