'use strict'

angular.module('dappstackApp.common.admin.addDapp')

    .component('addDappComponent', {
        template: require('./add-dapp.html'),
        controller: 'AddDappController',
        controllerAs: 'vm'
    });