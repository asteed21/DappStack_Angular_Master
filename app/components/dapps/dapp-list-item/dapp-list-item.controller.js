'use strict';

angular.module('dappstackApp.components.dapps.dappListItem')

    .controller('DappListItemController', ['$scope','$state','Dapps','DappStackUser','Likes','authService','Favorites', '$rootScope', function($scope, $state, Dapps, DappStackUser, Likes, authService, Favorites, $rootScope) {
        
        var vm = this;

        //establish scope variables for boolean values to be manipulated
        vm.showFavorite = true;
        vm.disableLikes = false;
        vm.disableFavorite = false;

        //function to check if user liked dapp already
        // vm.checkLikes = function(dappId) {
        //     DappStackUser.getCurrent().$promise.then(
        //         function(response) {
        //             console.log(response);
        //             //if (response.dappsLiked.indexOf(dappId) !== -1)
        //                 //vm.disableLikes = true;
        //         },
        //         function(response) {
        //             console.log(response + "ERROR - could not retrieve dapp info");
        //         }
        //     )
        // }

        // $scope.$watch('vm.loggedIn()', function (newValue, oldValue, scope) {
        //     vm.checkLikes();
        // }, true);

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
                var newLikes = vm.likes + 1;
                var updatedLikes = {likes: newLikes};

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