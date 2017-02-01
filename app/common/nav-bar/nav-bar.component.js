angular.module('app')

    .component('navBar', {
        bindings: {
            brand: '<'
        },  
        templateUrl: './common/nav-bar/nav-bar.html',
        controller: 'NavBarController'
    });