'use strict';

angular.module('dappstackApp.components.profile.profileFavorites.profileFavorite')

    .controller('ProfileFavoriteController', ['Favorite', function(Favorite) {
        
        var vm = this;

        vm.showDelete = false;

        vm.toggleDelete = function(favoriteId) {
            vm.showDelete = !vm.showDelete;
        };

        vm.deleteFavorite = function(favoriteid) {
            Favorite.deleteById({id: favoriteid}).$promise.then(
                function() {
                    vm.showDelete = !vm.showDelete;
                    vm.onDelete();
                },
                function(response) {
                    console.log("Error: " + response + " - COULD NOT DELETE");
                }
            )
        };

    }]);