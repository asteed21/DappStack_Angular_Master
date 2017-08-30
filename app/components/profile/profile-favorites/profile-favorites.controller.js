'use strict';

angular.module('dappstackApp.components.profile.profileFavorites')

    .controller('ProfileFavoritesController', ['DappStackUser', 'Favorite', '$rootScope', 'authService', function(DappStackUser, Favorite, $rootScope, authService) {
        
        var vm = this;
        vm.userId = authService.getCurrentId();

        vm.loadFavorites = function() {
            DappStackUser.favorites({
                id: vm.userId,
                filter:{
                    include: "dapps"
                }
            }).$promise.then(
                function (response) { 
                    vm.favorites = response;
                },
                function (response) {
                    console.log("Error: " + response.status + " " + response.statusText);
                }
        )};

        vm.loadFavorites();

    }]);