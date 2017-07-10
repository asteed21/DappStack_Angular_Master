'use strict';

angular.module('dappstackApp.components.dapps.dappDialog.dappAbout')

    .component('dappAboutComponent', {
        bindings: {
            aboutContent: '<',
            aboutImages: '<'
        },
        template: require('./dapp-about.html'),
        controller: 'DappAboutController',
        controllerAs: 'vm'
    });