angular.module('dappstackApp.components.profile.profileFavorites')

    .component('profileFavorites', {
        template: require('./profile-favorites.html'),
        controller: 'ProfileFavoritesController',
        controllerAs: 'vm'
    });