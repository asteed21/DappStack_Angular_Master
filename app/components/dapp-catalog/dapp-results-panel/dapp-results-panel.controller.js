'use strict';

angular.module('dappstackApp.components.dappCatalog.dappResultsPanel')

    .controller('DappResultsPanelController', ['Dapp', 'Tag', 'Category', function(Dapp, Tag, Category) {

        var vm = this

        vm.$onInit = function() {
            vm.maxPageResults = 10;
            vm.skipNumber = 0;
            vm.selectedTags;
            vm.category;
            vm.status;
            vm.heading = "Dapps matching " + '"' + vm.query + '"'; //update dapp list heading

            vm.nextPage = function() {
                vm.skipNumber += vm.maxPageResults;
                vm.loadResults();
            };

            vm.lastPage = function() {
                vm.skipNumber -= vm.maxPageResults;
                vm.loadResults();
            };

            //function to generate page results
            vm.loadResults = function() {
                var queryFilter = {
                    limit: vm.maxPageResults, 
                    skip: vm.skipNumber
                };

                console.log(queryFilter);

                Dapp.find({
                    filter: queryFilter
                })
                .$promise.then(
                    function (response) {
                        vm.dapps = response;
                    },
                    function (response) {
                        console.log("Error: " + response.status + " " + response.statusText);
                    }
                );
            }

            //function to get join from two arrays (to be used between dapp result arrays of compbined model queries, due to apparent loopback limitation)
            vm.combineDappArrays = function(array1, array2) {
                var result = [];

                for (var i = 0; i < array1.length; i++) {
                    var arrayOneObject = array1[i],
                        found = false;
                    for (var j = 0; j < array2.length; j++) {
                        if (arrayOneObject.id === array2[j].id) {
                            found = true;
                            break;
                        }
                    }
                    if (found === true) {
                        result.push(arrayOneObject);
                    }
                }
                return result;
            }
            
            if (vm.query != null) {
                Dapp.find({
                    filter: {
                        where: {
                            $text: {
                                search: vm.query
                            } 
                        },
                        limit: vm.maxPageResults,
                        skip: vm.skipNumber
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
                vm.loadResults();
            }
        }

        vm.$onChanges = function() {
            Category.dapps({
                id: vm.category
            })
            .$promise.then(
                function (response) {
                    vm.dapps = response;
                },
                function (response) {
                    console.log("Error: " + response.status + " " + response.statusText);
                }
            );
        };

    }]);