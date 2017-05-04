'use strict';

angular.module('dappstackApp.components.dapps.dappDialog')

    .component('dappDialogComponent', {
        bindings: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        templateUrl: './components/dapps/dapp-dialog/dapp-dialog.html',
        controller: 'DappDialogController',
        controllerAs: 'vm'
    });