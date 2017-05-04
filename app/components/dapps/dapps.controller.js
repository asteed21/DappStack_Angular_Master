'use strict';

angular.module('dappstackApp.components.dapps')

    .controller('DappsController', function(dappsFactory) {
        
        var vm = this;
        vm.dapps;

        dappsFactory.getDapps().then(function(data) {
            vm.dapps = data;
        });

    });