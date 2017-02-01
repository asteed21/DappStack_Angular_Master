'use strict';

/**
 * @ngdoc overview
 * @name dappstackAngularMasterApp
 * @description
 * # dappstackAngularMasterApp
 *
 * Main module of the application.
 */

let app = angular.module('app', [
    'ngResource',
    'ui.router',
    'ui.bootstrap'
  ])

app.config(function($stateProvider, $urlServiceProvider) {
  
  $urlServiceProvider.rules.otherwise({ state: 'app' });
  
  $stateProvider.state('app', {
        url:'/',
        views: {
          'header': {
            component: 'navBar'
          },
          'content': {
            template: '<div>something</div>'
          },
          'footer': {
            template: '<div>something else</div>'
          }
        }
    });

});