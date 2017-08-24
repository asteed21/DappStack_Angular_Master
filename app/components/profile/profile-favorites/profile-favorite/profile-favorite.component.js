angular.module('dappstackApp.components.profile.profileFavorites.profileFavorite')

    .component('profileFavorite', {
        bindings: {
            favorite: '<',
            onDelete: '&'
        },
        template: require('./profile-favorite.html'),
        controller: 'ProfileFavoriteController',
        controllerAs: 'vm'
    });