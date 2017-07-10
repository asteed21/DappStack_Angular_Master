angular.module('dappstackApp.components.home')

    .component('home', {
        template: require('./home.html'),
        controller: 'HomeController',
        controllerAs: 'vm'
    });