'use strict'

angular.module('dappstackApp.common.navBar')

    .component('navBar', {
        bindings: {
            brand: '<'
        },  
        templateUrl: './common/nav-bar/nav-bar.html',
        controller: 'NavBarController'
    });