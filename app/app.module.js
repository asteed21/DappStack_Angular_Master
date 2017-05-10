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

.constant('baseURL','http://0.0.0.0:3000/api')

.config(function($stateProvider, $urlServiceProvider) {
  
  $urlServiceProvider.rules.otherwise({ state: 'app' });
  
  $stateProvider.state('app', {
        url:'/',
        views: {
          'header': {
            component: 'navBar'
          },
          'content': {
            component: 'home'
          },
          'footer': {
            component: 'footerComponent'
          }
        }
  });

  $stateProvider.state('app.dapps', {
        url:'dapps',
        views: {
          'content@': {
            component: 'dapps'
          }
        }
  });

});