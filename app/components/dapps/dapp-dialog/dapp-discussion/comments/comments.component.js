'use strict';

angular.module('dappstackApp.components.dapps.dappDialog.dappDiscussion.comments')

    .component('commentsComponent', {
        template: require('./comments.html'),
        controller: 'CommentsController',
        controllerAs: 'vm'
    });