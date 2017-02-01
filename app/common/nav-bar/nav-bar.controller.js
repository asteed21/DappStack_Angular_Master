angular.module('app')

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

