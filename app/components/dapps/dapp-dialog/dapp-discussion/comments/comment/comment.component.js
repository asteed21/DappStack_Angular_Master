'use strict';

angular.module('dappstackApp.components.dapps.dappDialog.dappDiscussion.comments.comment')

    .component('commentComponent', {
        bindings: {
            comment: '<',
            loggedIn: '<',
            onDelete: '&'
        },
        template: require('./comment.html'),
        controller: 'CommentController',
        controllerAs: 'vm'
    });