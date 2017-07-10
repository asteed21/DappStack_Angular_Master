'use strict';

angular.module('dappstackApp.components.dapps.dappDialog')

    .component('dappDialogComponent', {
        template: require('./dapp-dialog.html'),
        controller: 'DappDialogController',
        controllerAs: 'vm'
    });