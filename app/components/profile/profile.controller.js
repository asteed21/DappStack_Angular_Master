'use strict';

angular.module('dappstackApp.components.profile')

    .controller('ProfileController', ['$state','DappStackUser','DappTeamMember','$rootScope','authService', function($state, DappStackUser, DappTeamMember, $rootScope, authService) {
        
        var vm = this;
        vm.loggedIn = authService.isAuthenticated();

        //manage data for badges on profile main page
        vm.favoritesCount = DappStackUser.favorites.count({id: $rootScope.currentUser.id});
        vm.commentsCount = DappStackUser.comments.count({id: $rootScope.currentUser.id});
        vm.dappTeamsCount;

        //retrieve number of dapps user is team member on
        DappTeamMember.find({
            filter: {
                where: {
                    memberId: $rootScope.currentUser.id
                }
            }
        }).$promise.then(
            function (response) {
                vm.dappTeamsCount = response.length;
            },
            function (response) {
                console.log("Error: " + response.status + " " + response.statusText);
            }
        );

        //get general user data
        vm.getUserInfo = DappStackUser.findOne({id: $rootScope.currentUser.id})
        .$promise.then(
            function (response) {
                vm.user = response;
            },
            function (response) {
                console.log("Error: " + response.status + " " + response.statusText);
            }
        );

        //if (authService.isAuthenticated());

        $rootScope.$on('login:Successful', function() {
            vm.getUserInfo();
            vm.loggedIn = true;
        });

        $rootScope.$on('logout:Successful', function() {
            vm.loggedIn = false;
        });

    }]);