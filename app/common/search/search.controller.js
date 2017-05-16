'use strict';

angular.module('dappstackApp.common.navBar')

    .controller('SearchController', ['$state', function($state) {
        
        var vm = this;
        vm.query;

        vm.performSearch = function() {
            $state.go('app.search', {q: vm.query});
        };
    
    }]);

