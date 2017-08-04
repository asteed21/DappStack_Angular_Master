angular.module('dappstackApp.components.dappCatalog.dappResultsPanel')

    .component('dappResultsPanel', {
        bindings: {
            category: "<",
            selectedTags: "<",
            query: "<",
            status: "<"
        },
        template: require('./dapp-results-panel.html'),
        controller: 'DappResultsPanelController',
        controllerAs: 'vm'
    });