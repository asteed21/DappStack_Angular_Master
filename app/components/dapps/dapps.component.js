angular.module('dappstackApp.components.dapps')

    .component('dapps', {
        bindings: {
            heading: '<'
        },
        templateUrl: './components/dapps/dapps.html',
        controller: 'DappsController',
        controllerAs: 'vm'
    });