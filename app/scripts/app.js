'use strict';

/**
 * @ngdoc overview
 * @name dappstackAngularMasterApp
 * @description
 * # dappstackAngularMasterApp
 *
 * Main module of the application.
 */

angular.module('dappstackAngularMasterApp', [
    'ngResource',
    'ui.router',
    'ui.bootstrap'
  ])

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      //route for the home page
      .state('app',{
        url:'/',
        views: {
          'view@': {
            templateUrl: 'views/main.html'
          }
        }
      })

      // route for the about page
      .state('app.about', {
          url:'about',
          views: {
              'view@': {
                  templateUrl: 'views/about.html'                 
              }
          }
      });

      $urlRouterProvider.otherwise('/');
  });
