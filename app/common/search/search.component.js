'use strict'

angular.module('dappstackApp.common.search')

    .component('searchComponent', {
        bindings: {
            pladeholder: '<'
        },
        template: require('./search.html'),
        controller: 'SearchController',
        controllerAs: 'vm'
    });