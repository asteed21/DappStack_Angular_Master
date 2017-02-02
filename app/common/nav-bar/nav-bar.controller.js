'use strict';

angular.module('dappstackApp.common.navBar')

    .controller('NavBarController', function() {
        // A list of menus
        this.menu = [{
            name: "Home",
            component: "home"
        }, {
            name: "About",
            component: "about"
        }, {
            name: "Contact",
            component: "contact"
        }];
    });

