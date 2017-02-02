'use strict';

angular.module('dappstackApp.common.navBar')

    .controller('NavBarController', function() {
        // Two primary menus of menus
        this.menu = [{
            name: "Login",
            component: "login"
        }, {
            name: "Sign Up",
            component: "register"
        }];
    });

