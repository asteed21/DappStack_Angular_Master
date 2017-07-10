angular.module('dappstackApp.components.profile')

    .component('profile', {
        template: require('./profile.html'),
        controller: 'ProfileController',
        controllerAs: 'vm'
    });