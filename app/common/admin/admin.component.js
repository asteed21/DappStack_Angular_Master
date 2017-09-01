'use strict'

angular.module('dappstackApp.common.admin')

    .component('adminComponent', {
        template: require('./admin.html'),
        controller: 'AdminController',
        controllerAs: 'vm'
    });