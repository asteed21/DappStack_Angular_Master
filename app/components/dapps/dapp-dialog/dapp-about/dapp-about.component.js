'use strict';

angular.module('dappstackApp.components.dapps.dappDialog.dappAbout')

    .component('dappAboutComponent', {
        bindings: {
            aboutContent: '<',
            aboutImages: '<'
        },
        templateUrl: './components/dapps/dapp-dialog/dapp-about/dapp-about.html',
        controller: 'DappAboutController',
        controllerAs: 'vm'
    });