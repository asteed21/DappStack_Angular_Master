'use strict';

/**
 * @ngdoc overview
 * @name dappstack
 * @description
 * # dappstack
 *
 * Main module of the application.
 */

angular.module('dappstackApp', [
  //Third Party
    'ngResource',
    'ui.router',
    'ngAnimate',
    'ui.bootstrap',
    'angularCSS',
  //In-App
    'dappstackApp.common',
    'dappstackApp.components'
  ])

.config(function($stateProvider, $urlServiceProvider) {
  
  $urlServiceProvider.rules.otherwise({ state: 'home' });
  
  $stateProvider.state('home', {
        url:'/',
        views: {
          'header': {
            component: 'navBar'
          },
          'content': {
            component: 'profile'
          },
          'footer': {
            component: 'footerComponent'
          }
        }
    });

});