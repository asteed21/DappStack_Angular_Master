angular.module('dappstackApp.components.dappCatalog.dappSearchPanel')

    .component('dappSearchPanel', {
        bindings: {
            category: "=",
            selectedTags: "=",
            statusesSelected: "="
        },
        template: require('./dapp-search-panel.html'),
        controller: 'DappSearchPanelController',
        controllerAs: 'vm'
    });