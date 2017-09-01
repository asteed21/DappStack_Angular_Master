'use strict'

angular.module('dappstackApp.common.admin.manageDapps.editDapp')

    .component('editDappComponent', {
        bindings: {
            dappId: '<'
        },
        template: require('./edit-dapp.html'),
        controller: 'EditDappController',
        controllerAs: 'vm'
    });