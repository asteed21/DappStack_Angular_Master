angular.module('dappstackApp.components.dapps')

    .component('dapps', {
        bindings: {
            heading: '@',
            limitTo: '<',
            orderBy: '@'
        },
        template: require('./dapps.html'),
        controller: 'DappsController',
        controllerAs: 'vm'
    });