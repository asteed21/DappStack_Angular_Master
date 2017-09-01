'use strict'

angular.module('dappstackApp.common.admin.addDapp')

    .controller('AddDappController', ['Dapp', function (Dapp) {
        
        var vm = this;
        vm.dappSubmitted = false;

        //define initial values for population on form
        vm.newName;
        vm.newCategory;
        vm.newTags;
        vm.newStatus;
        vm.newReleaseDate;
        vm.newWebsite;
        vm.newFacebook;
        vm.newTwitter;
        vm.newReddit;
        vm.newGithub;
        vm.newSlack;
        vm.newFeatured;
        vm.newThumbnailDescription;
        vm.newAboutContent;
        
        vm.submitDapp = function() {
            var dappInfo = {};
            var dappSocial = {};
            var tagsArray = vm.newTags.split(",");

            if (vm.newName) 
                dappInfo.name = vm.newName;
            if (vm.newCategory)
                dappInfo.category = vm.newCategory;
            if (vm.newTags)
                dappInfo.tags = tagsArray;
            if (vm.newStatus)
                dappInfo.status = vm.newStatus;
            if (vm.newReleaseDate)
                dappInfo.releaseDate = vm.newReleaseDate;
            if (vm.newWebsite)
                dappInfo.website = vm.newWebsite;
            if (vm.newFacebook)
                dappSocial.facebook = vm.newFacebook;
            if (vm.newTwitter)
                dappSocial.twitter = vm.newTwitter;
            if (vm.newReddit)
                dappSocial.reddit= vm.newReddit;
            if (vm.newGithub)
                dappSocial.github = vm.newGithub;
            if (vm.newSlack)
                dappSocial.slack = vm.newSlack;
            if (dappSocial !== null)
                dappInfo.socialLinks = dappSocial;
            if (vm.newFeatured)
                dappInfo.featured = vm.newFeatured;
            if (vm.newThumbnailDescription)
                dappInfo.thumbnailDescription= vm.newThumbnailDescription;
            if (vm.newAboutContent)
                dappInfo.aboutContent= vm.newAboutContent;

            Dapp.create(dappInfo).$promise.then(
                function(response) {
                    vm.dappSubmitted = true;
                },
                function(response) {
                    console.log("Error: " + response + " - COULD NOT UPDATE");
                }
            )
        };

    }]);
