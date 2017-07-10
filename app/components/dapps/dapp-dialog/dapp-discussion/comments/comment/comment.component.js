'use strict';

angular.module('dappstackApp.components.dapps.dappDialog.dappDiscussion.comments.comment')

    .component('commentComponent', {
        bindings: {
            comment: '<',
            comments: '<',
            loggedIn: '<'
        },
        template: require('./comment.html'),
        controller: 'CommentController',
        controllerAs: 'vm'
    });