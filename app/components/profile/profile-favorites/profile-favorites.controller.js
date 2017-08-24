'use strict';

angular.module('dappstackApp.components.profile.profileFavorites')

    .controller('ProfileFavoritesController', ['DappStackUser', 'Favorite','$rootScope', function(DappStackUser, Favorite, $rootScope) {
        
        var vm = this;

        vm.loadFavorites = function() {
            DappStackUser.favorites({id:$rootScope.currentUser.id, "filter":{"include":["dapps"]}})
            .$promise.then(
                function (response) {
                    vm.favorites = response;
                },
                function (response) {
                    console.log("Error: " + response.status + " " + response.statusText);
                }
            );
        }

        vm.loadFavorites();

    }]);