'use strict';

angular.module('dappstackApp.components.dapps.dappDialog')

    //Include $stateParams to get local route parameter of dappId and use in dappsFactory to populate modal
    .controller('DappDialogController', ['Dapp', 'Like', 'Favorite', '$state', '$stateParams', '$rootScope', 'authService', function(Dapp, Like, Favorite, $state, $stateParams, $rootScope, authService) {

        //Assign scope as variable
        var vm = this,
            dappId = $stateParams.dappId,
            userId = authService.getCurrentId(),
            currentLike;

        //initialize whatever is needed before component is displayed
        vm.$onInit = function() {
            //provide scope access to dapp information
            vm.dapp = Dapp.get({id: dappId})
            .$promise.then(
                function (response) {
                    vm.dapp = response;
                    
                    //Function to populate social icons with ng-show in dapp-diaolog view
                    vm.hasSocial = function(input) {
                        if (vm.dapp.socialLinks[input]) {
                            return true;
                        } else {
                            return false;
                        }
                    };
                },
                function (response) {
                    console.log("Error: " + response.status + " " + response.statusText);
                }
            );
        }

        //expressions to control button enable/disable
        vm.liked = false;
        vm.favorited = false;

        //function to check if user clicked dapp or favorite already
        vm.checkLikeOrFavorite = function(input) {
            if (input === "like") {
                Like.findOne({
                    filter:{
                        where:{
                            dappStackUserId: userId,
                            dappsId: dappId
                        }
                    }
                })
                .$promise.then(
                    function (response) {
                        vm.liked = true;
                        currentLike = response.id;
                    },
                    function (response) {
                        console.log("Error: " + response.status + " " + response.statusText);                      
                    }
                );
            };
            if (input === "favorite") {
                Favorite.findOne({
                    filter:{
                        where:{
                            dappStackUserId: userId,
                            dappsId: dappId
                        }
                    }
                })
                .$promise.then(
                    function (response) {
                        vm.favorited = true;
                    },
                    function (response) {
                        console.log("Error: " + response.status + " " + response.statusText);                   
                    }
                );
            };
        }

        //check if user has liked or favorited this dapp already
        vm.checkLikeOrFavorite("favorite");
        vm.checkLikeOrFavorite("like");

        //function to confirm current user is logged in
        vm.loggedIn = function() {
            return authService.isAuthenticated();
        }

        //function to add favorite to user's profile
        vm.handleFavorite = function() {
            if (vm.loggedIn()) {
                if (!vm.favorited) {
                    Favorite.create({dappStackUserId: $rootScope.currentUser.id, dappsId: dappId}).$promise.then(
                        function(response) {
                            console.log("favorite added");
                            vm.favorited = true;

                        },
                        function(response) {
                            console.log("Error: " + response.status + " " + response.statusText);
                        } 
                    );
                } else {
                    Favorite.findOne({filter:{where:{dappStackUserId: $rootScope.currentUser.id, dappsId: dappId}}}).$promise.then(
                        function(response) {
                            Favorite.deleteById({id: response.id}).$promise.then(
                                function(response) {
                                    console.log("favorited deleted");
                                    vm.favorited = false;
                                },
                                function(response) {
                                    console.log("Error: " + response.status + " " + response.statusText);
                                }
                            )
                        },
                        function(response) {
                            console.log("Error: " + response.status + " " + response.statusText);
                        }
                    )
                }
            }
        }

        //function to add a like to the list-item selected, then disable liking again
        vm.handleLike = function() {
            if (vm.loggedIn()) {
                if (!vm.liked) {
                    Like.create({dappStackUserId: $rootScope.currentUser.id, dappsId: dappId}).$promise.then(
                        function(response) {
                            console.log("like added");
                            vm.liked = true;

                        },
                        function(response) {
                            console.log("Error: " + response.status + " " + response.statusText);
                        } 
                    );
                } else {
                    Like.findOne({filter:{where:{dappStackUserId: $rootScope.currentUser.id, dappsId: dappId}}}).$promise.then(
                        function(response) {
                            Like.deleteById({id: response.id}).$promise.then(
                                function(response) {
                                    console.log("like deleted");
                                    vm.liked = false;
                                },
                                function(response) {
                                    console.log("Error: " + response.status + " " + response.statusText);
                                }
                            )
                        },
                        function(response) {
                            console.log("Error: " + response.status + " " + response.statusText);
                        }
                    )
                }
            }
        }

        vm.goBack = function() {
            if ($rootScope.previousState) {
                $state.go($rootScope.previousState);
            } else {
                $state.go('^');   
            }
        }
        
    }]);