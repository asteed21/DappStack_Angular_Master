'use strict';

angular.module('dappstackApp.components.dappCatalog.dappResultsPanel')

    .controller('DappResultsPanelController', ['Dapp', function(Dapp) {

        var vm = this;

        vm.maxPageResults = 10;
        vm.skipNumber = 0;

        vm.nextPage = function() {
            vm.skipNumber += vm.maxPageResults;
            vm.loadResults(vm.query, vm.category, vm.selectedTags, vm.statusesSelected);
        };

        vm.lastPage = function() {
            vm.skipNumber -= vm.maxPageResults;
            vm.loadResults(vm.query, vm.category, vm.selectedTags, vm.statusesSelected);
        };

        //function to execute query and generate page results
        vm.loadResults = function(searchQuery, category, tags, statuses) {
            //set base query variable (for pagination) and variables to work with
            var queryFilter = {
                    limit: vm.maxPageResults, 
                    skip: vm.skipNumber
                },
                parameters = [searchQuery, category, statuses, tags],
                checkedParams = [];
            
            //isolate query parameters that actually have a valid value, then set query with corresponding properties
            checkedParams = parameters.filter( function(element) {
                return typeof element != "undefined";
            });
            
            //set query where filter object to only have properties of valid parameters
            if (checkedParams.length > 0) {
                queryFilter.where = {};
                parameters.map (function(element) {
                    if (typeof searchQuery != "undefined") {
                        queryFilter.where.$text = {search: searchQuery};
                    };
                    if (typeof category != "undefined") {
                        queryFilter.where.category = category;
                    };
                    if (tags.length > 0 && typeof tags != "undefined") {
                        queryFilter.where.tags = {"inq": tags};
                    };
                    if (statuses.length > 0 && typeof statuses != "undefined") {
                       queryFilter.where.status = {"inq": statuses};
                    };
                });
            }

            //execute query and store results in array + update heading
            Dapp.find({
                filter: queryFilter
            })
            .$promise.then(
                function (response) {
                    console.log(queryFilter);
                    vm.dapps = response;
                    vm.heading =  " Dapps found"; //update dapp list heading
                },
                function (response) {
                    console.log("Error: " + response.status + " " + response.statusText);
                }
            );
        };


        vm.loadResults(vm.query, vm.category, vm.selectedTags, vm.statusesSelected);

        vm.$onChanges = function() {
            vm.loadResults(vm.query, vm.category, vm.selectedTags, vm.statusesSelected);
        };

    }]);