'use strict';

angular.module('dappstackApp.components.dapps.dappDialog')

    .controller('DappDialogController', function() {

        this.handleClose = function() {
            console.info("in handle close");
            this.$close({
                result: this.modalData
            });
        };
        this.handleDismiss = function() {
            console.info("in handle dismiss");
            this.$dismiss({
                reason: 'cancel'
            });
        };
    });