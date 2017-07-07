'use strict';

angular.module('dappstackApp.components.dapps.dappDialog.dappDiscussion')

    .component('dappDiscussionComponent', {
        bindings: {
            dappId: '<'
        },
        templateUrl: './components/dapps/dapp-dialog/dapp-discussion/dapp-discussion.html',
        controller: 'DappDiscussionController',
        controllerAs: 'vm'
    });