angular.module('dappstackApp.components.dapps')

    .component('dapps', {
        bindings: {
            heading: '<',
            filter: '<',
            limitTo: '<',
            orderBy: '<'
        },
        template: require('./dapps.html'),
        controller: 'DappsController',
        controllerAs: 'vm'
    });