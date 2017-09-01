'use strict'

angular.module('dappstackApp.common.auth.login')

    .component('loginComponent', {
        bindings: {
            onResolve: "&",
            onReject: "&" 
        },
        template: require('./login.html'),
        controller: 'LoginController',
        controllerAs: 'vm'
    });