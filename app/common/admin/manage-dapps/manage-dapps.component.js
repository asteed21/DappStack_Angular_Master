'use strict'

angular.module('dappstackApp.common.admin.manageDapps')

    .component('manageDappsComponent', {
        template: require('./manage-dapps.html'),
        controller: 'ManageDappsController',
        controllerAs: 'vm'
    });