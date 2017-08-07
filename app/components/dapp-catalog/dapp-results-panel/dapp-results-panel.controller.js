'use strict';

angular.module('dappstackApp.components.dappCatalog.dappResultsPanel')

    .controller('DappResultsPanelController', ['Dapp', function(Dapp) {

        var vm = this

        vm.$onInit = function() {
            vm.maxPageResults = 10;
            vm.skipNumber = 0;
            // vm.selectedTags;
            // vm.category;
            // vm.statusesSelected;
            vm.heading = "Dapps matching " + '"' + vm.query + '"'; //update dapp list heading

            vm.loadResults();
        };


        vm.nextPage = function() {
            vm.skipNumber += vm.maxPageResults;
            vm.loadResults();
        };

        vm.lastPage = function() {
            vm.skipNumber -= vm.maxPageResults;
            vm.loadResults();
        };
        //function to execute query and generate page results
        vm.loadResults = function() {

            var queryFilter = {
                limit: vm.maxPageResults, 
                skip: vm.skipNumber
            },
                parameters = [vm.query, vm.category, vm.statusesSelected, vm.selectedTags],
                checkedParams = [];
            
            parameters.map( function(element) {
                if (typeof element != "undefined") {
                    checkedParams.push(element);
                    console.log(element);
                }
            });

            console.log("building query");
            
            if (checkedParams.length > 0) {
                queryFilter.where = {};
                parameters.map (function(element) {
                    if (element === vm.query) {
                        queryFilter.where.$text = {search: vm.query};
                    } else if (element === vm.category) {
                        queryFilter.where.category = vm.category;
                    } else if (element === vm.tags) {
                        queryFilter.where.tags = {"inq": vm.selectedTags};
                    } else if (element === vm.status) {
                        queryFilter.where.status = {"inq": vm.statusesSelected};
                    }
                });
            }

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
        };

    }]);