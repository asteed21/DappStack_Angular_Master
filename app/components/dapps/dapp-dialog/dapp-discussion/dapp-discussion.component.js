'use strict';

angular.module('dappstackApp.components.dapps.dappDialog.dappDiscussion')

    .component('dappDiscussionComponent', {
        bindings: {
            dappId: '<'
        },
        template: require('./dapp-discussion.html'),
        controller: 'DappDiscussionController',
        controllerAs: 'vm'
    });