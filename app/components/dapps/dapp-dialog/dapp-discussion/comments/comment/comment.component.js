'use strict';

angular.module('dappstackApp.components.dapps.dappDialog.dappDiscussion.comments.comment')

    .component('commentComponent', {
        bindings: {
            comment: '<',
            comments: '<',
            loggedIn: '<'
        },
        templateUrl: './components/dapps/dapp-dialog/dapp-discussion/comments/comment/comment.html',
        controller: 'CommentController',
        controllerAs: 'vm'
    });