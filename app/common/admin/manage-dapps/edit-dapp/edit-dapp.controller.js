'use strict'

angular.module('dappstackApp.common.admin.manageDapps.editDapp')

    .controller('EditDappController', ['$state','$stateParams', 'Dapp', function ($state, $stateParams, Dapp) {
        
        var vm = this;


        function getDapp(dappId) {
            Dapp.findById({id: dappId}).$promise.then(
                function(response) {
                    console.log(response);
                    vm.dapp= response;

                    //define initial values for population on form
                    vm.newName = vm.dapp.name;
                    vm.newCategory = vm.dapp.category;
                    vm.newTags = vm.dapp.tags;
                    vm.newStatus = vm.dapp.status;
                    vm.newReleaseDate = new Date(vm.dapp.releaseDate);
                    vm.newWebsite = vm.dapp.website;
                    vm.newFacebook = vm.dapp.socialLinks.facebook;
                    vm.newTwitter = vm.dapp.socialLinks.twitter;
                    vm.newReddit = vm.dapp.socialLinks.reddit;
                    vm.newGithub = vm.dapp.socialLinks.github;
                    vm.newSlack = vm.dapp.socialLinks.slack;
                    vm.newFeatured = vm.dapp.featured;
                    vm.newThumbnailDescription = vm.dapp.thumbnailDescription;
                    vm.newAboutContent = vm.dapp.aboutContent;
                },
                function(response) {
                    console.log("Error: " + response);
                }
            )
        }
        
        getDapp($stateParams.dappId);

        //Edit and process profile information
        vm.toggleEdit = function () {
            vm.showEdit = !vm.showEdit;
        };

        vm.updateDapp = function() {
            var updatedInfo = {};
            var updatedSocial = {};
            var tagsArray = vm.newTags.split(",");

            if (vm.newName) 
                updatedInfo.name = vm.newName;
            if (vm.newCategory)
                updatedInfo.category = vm.newCategory;
            if (vm.newTags)
                updatedInfo.tags = tagsArray;
            if (vm.newStatus)
                updatedInfo.status = vm.newStatus;
            if (vm.newReleaseDate)
                updatedInfo.releaseDate = vm.newReleaseDate;
            if (vm.newWebsite)
                updatedInfo.website = vm.newWebsite;
            if (vm.newFacebook)
                updatedSocial.facebook = vm.newFacebook;
            if (vm.newTwitter)
                updatedSocial.twitter = vm.newTwitter;
            if (vm.newReddit)
                updatedSocial.reddit= vm.newReddit;
            if (vm.newGithub)
                updatedSocial.github = vm.newGithub;
            if (vm.newSlack)
                updatedSocial.slack = vm.newSlack;
            if (updatedSocial !== null)
                updatedInfo.socialLinks = updatedSocial;
            if (vm.newFeatured)
                updatedInfo.featured = vm.newFeatured;
            if (vm.newThumbnailDescription)
                updatedInfo.thumbnailDescription= vm.newThumbnailDescription;
            if (vm.newAboutContent)
                updatedInfo.aboutContent= vm.newAboutContent;
            
            console.log(updatedInfo);

            Dapp.update({where:{id: vm.dapp.id}}, updatedInfo).$promise.then(
                function() {
                    vm.showEdit = !vm.showEdit;
                    $state.go($state.current, {}, {reload: true});
                },
                function(response) {
                    console.log("Error: " + response + " - COULD NOT UPDATE");
                }
            )
        };

        vm.goBack = function() {
            $state.go('^');   
        }
    }]);
