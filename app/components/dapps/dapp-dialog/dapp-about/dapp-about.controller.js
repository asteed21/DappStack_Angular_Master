'use strict';

angular.module('dappstackApp.components.dapps.dappDialog.dappAbout')

    .controller('DappAboutController', [ function() {

        var vm = this;

        vm.slideInterval = 3000;
        vm.noWrapSlides = false;
        vm.activeSlide = 0;
    }]);