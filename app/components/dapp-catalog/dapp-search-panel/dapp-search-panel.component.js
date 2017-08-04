angular.module('dappstackApp.components.dappCatalog.dappSearchPanel')

    .component('dappSearchPanel', {
        bindings: {
            category: "<",
            selectedTags: "<",
            status: "<",
            onCategoryChange: "&",
            onTagChange: "&",
            onStatusChange: "&"
        },
        template: require('./dapp-search-panel.html'),
        controller: 'DappSearchPanelController',
        controllerAs: 'vm'
    });