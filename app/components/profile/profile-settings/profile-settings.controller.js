'use strict';

angular.module('dappstackApp.components.profile.profileSettings')

    .controller('ProfileSettingsController', ['DappStackUser', '$rootScope', '$state', 'authService', function(DappStackUser, $rootScope, $state, authService) {
        
        var vm = this;
        vm.userId = authService.getCurrentId();

        vm.showEdit = false;
        vm.newEmail;
        vm.newFirstName;
        vm.newLastName;
        vm.newPassword;
        vm.newProfileImage;
        
        DappStackUser.findOne({id: vm.userId})
        .$promise.then(
            function (response) {
                vm.user = response;
            },
            function (response) {
                console.log("Error: " + response.status + " " + response.statusText);
            }
        );

        //Edit and process profile information
        vm.toggleEdit = function () {
            vm.showEdit = !vm.showEdit;
        };

        vm.updateProfile = function() {
            var updatedInfo = {};
            if (vm.newUsername) 
                updatedInfo.username = vm.newUsername;
            if (vm.newPassword)
                updatedInfo.password = vm.newPassword;
            if (vm.newEmail)
                updatedInfo.email = vm.newEmail;
            if (vm.newFirstName)
                updatedInfo.firstName = vm.newFirstName;
            if (vm.newLastName)
                updatedInfo.lastName = vm.newLastName;
            if (vm.newProfileImage)
                updatedInfo.profileImage = vm.newProfileImage;
            
            DappStackUser.update({id: vm.userId}, updatedInfo).$promise.then(
                function() {
                    vm.showEdit = !vm.showEdit;
                    $state.go($state.current, {}, {reload: true});
                },
                function(response) {
                    console.log("Error: " + response + " - COULD NOT UPDATE");
                }
            )
        };
    }]);