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
//Third Party Modules
  'ngResource',
  'ui.router',
  'ngAnimate',
  'ui.bootstrap',
  'angularCSS',
  'ngDialog',
//In-App
  'lbServices', //-->Loopback-generated services
  'dappstackApp.common',
  'dappstackApp.components',
])

.config( function($stateProvider, $urlServiceProvider, LoopBackResourceProvider) {

  // Assign the URL lb-services uses to access the LoopBack REST API server
  LoopBackResourceProvider.setUrlBase('http://0.0.0.0:3000/api');

  //state routing for basic app states (no other dependencies)
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

  $stateProvider.state('app.profile', {
        url:'profile',
        views: {
          'content@': {
            component: 'profile'
          },
          'profile-content@app.profile': {
            component: 'profileFavorites'
          }
        }
  });

  $stateProvider.state('app.profile.favorites', {
        url:'/favorites',
        views: {
          'profile-content@app.profile': {
            component: 'profileFavorites'
          }
        }
  });

  $stateProvider.state('app.profile.settings', {
        url:'/settings',
        views: {
          'profile-content@app.profile': {
            component: 'profileSettings'
          }
        }
  });

  $stateProvider.state('app.dapps', {
        url:'dapps',
        views: {
          'content@': {
            component: 'dappCatalog'
          }
        }
  });

  $stateProvider.state('app.search', {
        url:'search/dapps?q',
        views: {
          'content@': {
            component: 'dappCatalog'
          }
        }
  });

  $stateProvider.state('app.dapps.dappdetails', {
        url:'/:dappId',
        views: {
          'content@': {
            component: 'dappDialogComponent'
          }
        }
  });



  //set default route for the app to homepage
  $urlServiceProvider.rules.otherwise({ state: 'app' })

})

//set function on $rootScope to check for state change, set variable for use in controllers
.run(function($rootScope, $transitions, $state) {    

    $transitions.onSuccess({}, function($transition$) {
      $rootScope.previousState = $transition$.$from().name;
  });

})

;