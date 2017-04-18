'use strict';

angular.module('dappstackApp.components.dapps.dappDialog')

    .controller('DappDialogController', function() {

        this.selected = {
            //item: this.items[0]
        };

        this.ok = function () {
            $uibModalInstance.close(this.selected.item);
        };

        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    });