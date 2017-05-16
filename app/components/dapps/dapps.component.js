angular.module('dappstackApp.components.dapps')

    .component('dapps', {
        bindings: {
            heading: '<',
            filter: '<',
            limitTo: '<',
            orderBy: '<'
        },
        templateUrl: './components/dapps/dapps.html',
        controller: 'DappsController',
        controllerAs: 'vm'
    });