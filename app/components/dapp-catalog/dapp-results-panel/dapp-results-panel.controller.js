'use strict';

angular.module('dappstackApp.components.dappCatalog.dappResultsPanel')

    .controller('DappResultsPanelController', ['Dapp', 'Tag', 'Category', function(Dapp, Tag, Category) {

        var vm = this;

        vm.$onInit = function() {
            vm.heading = "Dapps matching " + '"' + vm.query + '"'; //update dapp list heading
            
            if (vm.query != null) {
                Dapp.find({
                    filter: {
                        where: {
                            $text: {
                                search: vm.query
                            } 
                        }
                    }
                })
                .$promise.then(
                    function (response) {
                        vm.dapps = response;
                    },
                    function (response) {
                        console.log("Error: " + response.status + " " + response.statusText);
                    }
                );
            } else {
                Dapp.find({})
                .$promise.then(
                    function (response) {
                        vm.dapps = response;
                    },
                    function (response) {
                        console.log("Error: " + response.status + " " + response.statusText);
                    }
                );
            }
        }

        vm.$onChanges = function() {
            Category.dapps({
                id: vm.category
            })
            .$promise.then(
                function (response) {
                    vm.dapps += response;
                },
                function (response) {
                    console.log("Error: " + response.status + " " + response.statusText);
                }
            );
        }

    }]);