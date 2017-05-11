'use strict';

angular.module('dappstackApp.components.dapps.dappDialog.dappAbout')

    .controller('DappAboutController', function() {

        var vm = this;
        
        vm.slides = vm.aboutImages;
        vm.slideInterval = 5000;
        vm.noWrapSlides = false;
        vm.activeSlide = 0;
    });