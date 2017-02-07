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
    'ngResource',
    'ui.router',
    'ui.bootstrap',
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
            component: 'dapps'
          },
          'footer': {
            component: 'footerComponent'
          }
        }
    });

});