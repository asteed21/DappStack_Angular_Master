'use strict';

angular.module('dappstackApp.components.dappCatalog.dappSearchPanel')

    .controller('DappSearchPanelController', ['Tag', 'Category', function(Tag, Category) {

        var vm = this;

        vm.categories;
        vm.tags;

        //Get dapps list from database - TODO: work filter into db query
        Category.find()
            .$promise.then(
            function (response) {
                vm.categories = response;
            },
            function (response) {
                console.log("Error: " + response.status + " " + response.statusText);
            }
        );

        Tag.find()
            .$promise.then(
            function (response) {
                vm.tags = response;
            },
            function (response) {
                console.log("Error: " + response.status + " " + response.statusText);
            }
        );

        //function to handle click on categories
        vm.assignCategory = function(category) {
            vm.category = category;
            vm.onCategoryChange({$event: {category: category}})
        };

        vm.assignTag = function(tag) {
            vm.tag = tag;
            vm.onTagChange({$event: {tag: tag}})
        };

    }]);