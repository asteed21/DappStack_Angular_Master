'use strict'

angular.module('dappstackApp.common.search')

    .component('searchComponent', {
        bindings: {
            pladeholder: '<'
        },
        templateUrl: './common/search/search.html',
        controller: 'SearchController',
        controllerAs: 'vm'
    });