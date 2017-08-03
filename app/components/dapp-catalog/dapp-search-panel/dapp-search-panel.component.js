angular.module('dappstackApp.components.dappCatalog.dappSearchPanel')

    .component('dappSearchPanel', {
        bindings: {
            category: "<",
            tag: "<",
            onCategoryChange: "&",
            onTagChange: "&"
        },
        template: require('./dapp-search-panel.html'),
        controller: 'DappSearchPanelController',
        controllerAs: 'vm'
    });