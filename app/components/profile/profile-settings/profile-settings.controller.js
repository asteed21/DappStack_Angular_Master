'use strict';

angular.module('dappstackApp.components.profile.profileSettings')

    .controller('ProfileSettingsController', ['DappStackUser', '$rootScope', '$state', 'FileUploader', 'urlBase', function(DappStackUser, $rootScope, $state, FileUploader, urlBase) {
        
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
            },
            function (response) {
                console.log("Error: " + response.status + " " + response.statusText);
            }
        );

        //Handle image uploading for profile pic using Angular File Upload
        vm.uploader = new FileUploader({
            scope: vm,                          // to automatically update the html. Default: $rootScope
            url: urlBase + '/attachments/pics/upload',
            formData: [
                { dappStackUserId: $rootScope.currentUser.id }
            ]
        });

        vm.uploader.filters.push({
            name: 'imageFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });

        // REGISTER HANDLERS
        // --------------------
        vm.uploader.onAfterAddingFile = function(item) {
            console.info('After adding a file', item);
            var fileExtension = '.' + item.file.name.split('.').pop();

            item.file.name = $rootScope.currentUser.id + fileExtension;
        };
        // --------------------
        vm.uploader.onAfterAddingAll = function(items) {
        console.info('After adding all files', items);
        };
        // --------------------
        vm.uploader.onWhenAddingFileFailed = function(item, filter, options) {
        console.info('When adding a file failed', item);
        };
        // --------------------
        vm.uploader.onBeforeUploadItem = function(item) {
        console.info('Before upload', item);
        };
        // --------------------
        vm.uploader.onProgressItem = function(item, progress) {
        console.info('Progress: ' + progress, item);
        };
        // --------------------
        vm.uploader.onProgressAll = function(progress) {
        console.info('Total progress: ' + progress);
        };
        // --------------------
        vm.uploader.onSuccessItem = function(item, response, status, headers) {
        console.info('Success', response, status, headers);
        console.log(urlBase + '/attachments/pics/' + item.file.name);
        };
        // --------------------
        vm.uploader.onErrorItem = function(item, response, status, headers) {
        console.info('Error', response, status, headers);
        };
        // --------------------
        vm.uploader.onCancelItem = function(item, response, status, headers) {
        console.info('Cancel', response, status);
        };
        // --------------------
        vm.uploader.onCompleteItem = function(item, response, status, headers) {
        console.info('Complete', response, status, headers);
        };
        // --------------------
        vm.uploader.onCompleteAll = function() {
        console.info('Complete all');
        };
        // --------------------








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