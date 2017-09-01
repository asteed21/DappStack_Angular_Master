'use strict';

angular.module('dappstackApp.components.dapps.dappDialog.dappDiscussion.comments.comment')

    .controller('CommentController', ['Dapp', 'Comment', 'DappStackUser', '$rootScope','$stateParams', function(Dapp, Comment, DappStackUser, $rootScope, $stateParams) {

        var vm = this;

        vm.$onInit = function() {

            vm.showEditOrDelete = false;
            vm.username;
            vm.amOwner;
            vm.replies = [];
            vm.comment = vm.comment;

            function amOwner(comment) {
                if (comment.dappStackUserId == $rootScope.currentUser.id) {
                    vm.amOwner = true;
                } else {
                    vm.amOwner = false;
                }
            };

            function getUsername(comment) {
                DappStackUser.findById({id: comment.dappStackUserId})
                .$promise.then(
                    function(response) {
                        vm.username = response.username;
                    },
                    function(response) {
                        console.log("Error " + response + " - COULD NOT GET USERNAME")
                    }
                )
            };

            amOwner(vm.comment);
            getUsername(vm.comment);

            getReplies(vm.comment);
        }

        function getReplies(comment) {
            Comment.find({filter:{where:{dappId: comment.dappId, parentId: comment.id}}})
            .$promise.then(
                function(response) {
                    vm.replies = response;
                },
                function(response){
                    console.log('Error - ' + response + ' - COULD NOT GET COMMENTS')
                }
            )
        };

        vm.commentEdit = function(commentObj) {
            commentObj.interact = commentObj.comment;
            commentObj.editing = true;
            commentObj.replying = false;
        };

        vm.commentReply = function(commentObj) {
            commentObj.interact = '';
            commentObj.replying = true;
            commentObj.editing = false;
            getReplies(commentObj);
        };

        vm.cancelComment = function(commentObj) {
            commentResetState(commentObj);
        };

        vm.updateComment = function(commentObj) {
            Dapp.comments.updateById({id: commentObj.dappId, fk: commentObj.id}, {comment: commentObj.interact})
            .$promise.then(
                function(response) {
                    vm.comment = response;
                    commentResetState(commentObj);
                },
                function(response) {
                    console.log("ERROR - " + response + " - UNABLE TO UPDATE COMMENT");
                }
            );
        };

        vm.replyComment = function(commentObj) {
            var childComment = {
                comment: commentObj.interact,
                replying: false,
                editing: false,
                interact: '',
                dappId: $stateParams.dappId,
                dappStackUserId: $rootScope.currentUser.id,
            }
            Comment.replies.create({id: commentObj.id}, childComment)
            .$promise.then(
                function(response) {
                    commentResetState(commentObj);
                    getReplies(commentObj);
                },
                function(response) {
                    console.log("Error - " + response + " - COULD NOT CREATE REPLY");
                }
            );
        };

        vm.deleteComment = function(commentObj) {
            Dapp.comments.destroyById({id: commentObj.dappId, fk: commentObj.id})
            .$promise.then(function() {
                vm.onDelete();
            });
        };

        vm.score = function(commentObj){
            return parseFloat(commentObj.upVotes - commentObj.downVotes) * -1;
        };

        vm.removeItem = function(index) {
            vm.replies.splice(index, 1);
        };

        function commentResetState(commentObj) {
            commentObj.replying = false;
            commentObj.editing = false;
        };

    }]);