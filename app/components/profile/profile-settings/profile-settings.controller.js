'use strict';

angular.module('dappstackApp.components.profile.profileSettings')

    .controller('ProfileSettingsController', ['DappStackUser', '$rootScope', '$state', function(DappStackUser, $rootScope, $state) {
        
        var vm = this;

        vm.showEdit = false;
        vm.newEmail;
        vm.newFirstName;
        vm.newLastName;
        vm.newPassword;
        vm.newProfileImage;
        
        DappStackUser.findOne({id: $rootScope.currentUser.id})
        .$promise.then(
            function (response) {
                vm.user = response;
                console.log(vm.user);
            },
            function (response) {
                console.log("Error: " + response.status + " " + response.statusText);
            }
        );

        vm.toggleEdit = function () {
            vm.showEdit = !vm.showEdit;
        };

        vm.updateProfile = function() {
            var updatedInfo = {};
            if (vm.newUsername) 
                updatedInfo.username = vm.newUsername;
            if (vm.newPassword)
                updatedInfo.password = vm.newPassword;
            if (vm.newFirstName)
                updatedInfo.firstName = vm.newFirstName;
            if (vm.newLastName)
                updatedInfo.lastName = vm.newLastName;
            if (vm.newProfileImage)
                updatedInfo.profileImage = vm.newProfileImage;
            
            console.log(updatedInfo);
            DappStackUser.prototype$updateAttributes({id: $rootScope.currentUser.id}, updatedInfo).$promise.then(
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