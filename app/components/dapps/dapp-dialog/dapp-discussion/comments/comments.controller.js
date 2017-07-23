'use strict';

angular.module('dappstackApp.components.dapps.dappDialog.dappDiscussion.comments')

    .controller('CommentsController', ['$scope', 'Dapp', 'Comment', '$rootScope', 'authService', '$stateParams', function($scope, Dapp, Comment, $rootScope, authService, $stateParams) {

        var vm = this;

        vm.$onInit = function() {

            vm.comments = [];
            vm.formComment = {};
            vm.commentMap = {};
            vm.loggedIn = authService.isAuthenticated();

            //TODO - configure $scope.watch() or similar to manage list updates automatically
            function _updateCommentsList() {
                Dapp.comments({id: $stateParams.dappId})
                .$promise.then(
                    function(response) {
                        console.log(response);
                        _setComments(response);
                    },
                    function(response){
                        console.log('Error - ' + response + ' - COULD NOT GET COMMENTS')
                    }
                )
            };

            vm.createComment = function() {
                if (vm.formComment.body) {
                    var newComment = {
                        DappId: $stateParams.dappId,
                        DappStackUserId: $rootScope.currentUser.id,
                        comment: vm.formComment.body,
                        comments: []
                    };
                    Comment.create(newComment)
                    .$promise.then(
                        function(response) {
                            _resetFormComment();
                            _updateCommentsList();
                        },
                        function(response) {
                            console.log('Error - ' + response + " - COULD NOT ADD COMMENT");
                        }
                    )
                }
            };

            //update comment list at load, follow up of above function placement
            _updateCommentsList();
        }

        /// Controller-side helper functions, not accessed in view
        function _resetFormComment() {
            vm.formComment = null;
            vm.formComment = {};
        }

        function _setComments(response) {
            vm.comments = null;
            vm.commentMap = null;
            vm.commentMap = {};

            vm.comments = response;
            _mapComments(vm.comments);
            console.log(vm.comments);

        }

        function _mapComments(comments) {
            comments.forEach( function(comment){
                vm.commentMap[comments.id] = comment;
                if (comment.comments) {
                    _mapComments(comment.comments)
                }
            });

        }

    }]);