'use strict';

angular.module('dappstackApp.components.dapps.dappListItem')

    .controller('DappListItemController', ['$state','Dapp','Favorite','Like', function($state, Dapp, Favorite, Like) {
        
        var vm = this;

        vm.$onInit = function() {
            vm.dappId = vm.dappId;
            //expression for count of dapp favorites
            Favorite.count({where:{dappsId:vm.dappId}}).$promise.then(
                function(response) {
                    vm.dappFavCount = response.count;
                }
            );
            //expression for count of dapp likes
            Like.count({where:{dappsId:vm.dappId}}).$promise.then(
                function(response) {
                    vm.dappLikeCount = response.count;
                }
            );
        }

    }]);