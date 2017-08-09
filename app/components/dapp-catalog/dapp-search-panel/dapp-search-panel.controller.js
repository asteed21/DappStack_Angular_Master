'use strict';

angular.module('dappstackApp.components.dappCatalog.dappSearchPanel')

    .controller('DappSearchPanelController', ['Tag', 'Category', function(Tag, Category) {

        var vm = this;

        vm.$onInit = function() {
            vm.categories;
            vm.tags;
            vm.statuses = [
                {label:"Live", selected: false},
                {label:"In Progress", selected: false},
                {label:"Concept", selected: false},
                {label:"Deprecated", selected: false}
            ]; //array of possible statuses
            vm.selectedTags = []; //array of tags selected
            vm.statusesSelected = []; //array of statuses selected
        };

        //Get available categories
        Category.find()
            .$promise.then(
            function (response) {
                vm.categories = response;
            },
            function (response) {
                console.log("Error: " + response.status + " " + response.statusText);
            }
        );

        //Get available tags
        Tag.find()
            .$promise.then(
            function (response) {
                vm.tags = response;
            },
            function (response) {
                console.log("Error: " + response.status + " " + response.statusText);
            }
        );

        //funcitons to check status of categories, tags and statuses
        vm.checkCategory = function(category) {
            if (vm.category === category) {
                vm.removeCategory(category);
            } else {
                vm.assignCategory(category);
            }
        };

        vm.checkTag = function(tag) {
            if (vm.selectedTags.indexOf(tag) == -1) {
                vm.assignTag(tag);
            } else {
                vm.removeTag(tag);
            }
        };

        vm.checkStatus = function(status) {
            var found = false;
            for (var i=0; i < vm.statuses.length; i++) {
                if (vm.statuses[i].label === status && vm.statuses[i].selected === true) {
                    found = true;
                    break
                }
            }
            if (found) {
                vm.removeStatus(status);
            } else {
                vm.assignStatus(status);
            }
        };

        //functions to handle clicks on inactive categories, tags and statuses
        vm.assignCategory = function(category) {
            vm.category = category;
        };

        vm.assignTag = function(tag) {
            vm.selectedTags.push(tag);
        };

        vm.assignStatus = function(status) {
            vm.statusesSelected.push(status);
            vm.statuses[vm.statuses.findIndex(i => i.label === status)].selected = true;
        }

        //functions to handle clicks on actie category, tags and statuses
        vm.removeCategory = function(category) {
            vm.category = category;
        }

        vm.removeTag = function(tag) {
            vm.selectedTags.splice(vm.selectedTags.indexOf(tag),1);
        }

        vm.removeStatus = function(status) {
            vm.statusesSelected.splice(vm.statusesSelected.indexOf(status),1);
            vm.statuses[vm.statuses.findIndex(i => i.label === status)].selected = false;
        }

    }]);