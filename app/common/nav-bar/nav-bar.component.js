'use strict'

angular.module('dappstackApp.common.navBar')

    .component('navBar', {
        bindings: {
            brand: '<'
        },  
        template: require('./nav-bar.html'),
        controller: 'NavBarController',
        controllerAs: 'vm'
    });