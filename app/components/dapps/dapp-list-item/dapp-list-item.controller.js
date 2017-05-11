'use strict';

angular.module('dappstackApp.components.dapps.dappListItem')

    .controller('DappListItemController', function($state) {
        
        var vm = this;
        
        vm.provideState = function() {
            if ($state.current.name === "app") {
                return "app.dappdetails({dappId: vm.dappId})";
            } else {
                return "app.dapps.dappdetails({dappId: vm.dappId})";
            }
        }

    });