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
    'dappstackApp.common'
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
            template: '<div>something</div>'
          },
          'footer': {
            component: 'footerComponent'
          }
        }
    });

});