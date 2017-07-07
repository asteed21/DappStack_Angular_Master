'use strict';

angular.module('dappstackApp.components.dapps.dappListItem')

    .controller('DappListItemController', ['$scope','$state','Dapps','DappStackUser','Likes','authService','Favorites', '$rootScope', function($scope, $state, Dapps, DappStackUser, Likes, authService, Favorites, $rootScope) {
        
        var vm = this;

        //establish scope variables for boolean values to be manipulated
        vm.showFavorite = true;
        vm.disableLikes = false;
        vm.disableFavorite = false;

        //function to check if user liked dapp already TODO: add boolean property to model to enable dislike functionality
        vm.checkLikesandFavorites = function(input) {
            DappStackUser.likes({id:$rootScope.currentUser.id, "filter":{"include":["dapps"]}})
            .$promise.then(
                function (response) {
                    response.forEach( function(element) {
                        if (element.dappsId == input) {
                            vm.disableLikes = !vm.disableLikes;
                        }
                    });
                },
                function (response) {
                    console.log("Error: " + response.status + " " + response.statusText);
                }
            );
            DappStackUser.favorites({id:$rootScope.currentUser.id, "filter":{"include":["dapps"]}})
            .$promise.then(
                function (response) {
                    response.forEach( function(element) {
                        if (element.dappsId == input) {
                            vm.showFavorite = !vm.showFavorite;
                        }
                    });
                },
                function (response) {
                    console.log("Error: " + response.status + " " + response.statusText);
                }
            );
        }

        //watch scope for login to check and disable likes/check and disable favorites
        $scope.$watch('vm.loggedIn()', function (newValue, oldValue, scope) {
            if (vm.loggedIn())
                vm.checkLikesandFavorites(vm.dappId);
        }, true);

        //function to confirm current user is logged in
        vm.loggedIn = function() {
            return authService.isAuthenticated();
        }

        //function to add favorite to user's profile, executed using angular directives in template
        vm.addFavorite = function(input) {
            if (vm.loggedIn())
                Favorites.create({dappStackUserId: $rootScope.currentUser.id, dappsId: input}).$promise.then(
                    function(response) {
                        vm.showFavorite = !vm.showFavorite;
                    },
                    function(response) {
                        console.log(response);
                    } 
                );
        }

        //function to add a like to the list-item selected, then disable liking again
        vm.addLike = function(input) {
            if (vm.loggedIn())
                Likes.create({dappStackUserId: $rootScope.currentUser.id, dappsId: input}).$promise.then(
                    function(response) {
                        vm.disableLikes = !vm.disableLikes;
                        console.log(response);
                    },
                    function(response) {
                        console.log(response);
                    } 
                );
        }

    }]);