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
    'ngDialog'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      //route for the home page
      .state('app',{
        url:'/',
        views: {
          'header': {
            templateUrl: 'views/header.html'
          },
          'content': {
            templateUrl: 'views/main.html',
            controller: 'MainController'
          },
          'footer': {
            templateUrl: 'views/footer.html'
          }
        }
      })

      // route for the about page
      .state('app.about', {
          url:'about',
          views: {
              'content@': {
                  templateUrl: 'views/about.html',
                  controller: 'AboutController'                 
              }
          }
      })

      $urlRouterProvider.otherwise('/');
  });
