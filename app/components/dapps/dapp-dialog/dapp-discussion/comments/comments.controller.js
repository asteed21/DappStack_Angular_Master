'use strict';

angular.module('dappstackApp.components.dapps.dappDialog.dappDiscussion.comments')

    .controller('CommentsController', ['$scope', 'Dapp', 'Comment', '$rootScope', 'authService', '$stateParams', function($scope, Dapp, Comment, $rootScope, authService, $stateParams) {

        var vm = this;

        vm.formComment = {};
        vm.commentMap = {};
        vm.loggedIn = authService.isAuthenticated();
        vm.dappId = $stateParams.dappId;

        function updateCommentsList() {
            Comment.find({filter:{where:{dappId: $stateParams.dappId, parentId: {exists:false}}}})
            .$promise.then(
                function(response) {
                    setComments(response);
                },
                function(response){
                    console.log('Error - ' + response + ' - COULD NOT GET COMMENTS')
                }
            )
        };

        vm.createComment = function() {
            if (vm.formComment.body) {
                var newComment = {
                    dappId: vm.dappId,
                    dappStackUserId: $rootScope.currentUser.id,
                    comment: vm.formComment.body
                };
                Comment.create(newComment)
                .$promise.then(
                    function(response) {
                        resetFormComment();
                        updateCommentsList();
                    },
                    function(response) {
                        console.log('Error - ' + response + " - COULD NOT ADD COMMENT");
                    }
                )
            }
        };

        //update comment list at load, follow up of above function placement
        updateCommentsList();

        /// Controller-side helper functions, not accessed in view
        function resetFormComment() {
            vm.formComment = null;
            vm.formComment = {};
        }

        function setComments(response) {
            vm.comments = null;
            vm.commentMap = null;
            vm.commentMap = {};

            vm.comments = response;
        }

        vm.removeItem = function(index) {
            vm.comments.splice(index, 1);
        };
    }]);