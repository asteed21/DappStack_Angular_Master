'use strict'

angular.module('dappstackApp.common.auth.register')

.component('registerComponent', {
    bindings: {
        onResolve: "&",
        onReject: "&" 
    },
    template: require('./register.html'),
    controller: 'RegisterController',
    controllerAs: 'vm'
});