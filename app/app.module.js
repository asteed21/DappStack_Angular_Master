'use strict';

//css require statements
require("../node_modules/tether/dist/css/tether.min.css");
require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../node_modules/ng1bs4/library/library.css");
require("../node_modules/font-awesome/css/font-awesome.min.css");
require("../node_modules/ng-dialog/css/ngDialog.min.css");
require("../node_modules/ng-dialog/css/ngDialog-theme-default.min.css");
require("./styles/main.css");

//vendor module loading
require('jquery');
require('tether');
require('bootstrap');
require('angular');
require('angular-resource');
var uiRouter = require('angular-ui-router').default;
require('angular-animate');
require('ng-dialog');
require('angular-file-upload');

//app module loading
require('./lb-services');
require('./common/common.module');
require('./components/components.module');
require('./common/nav-bar/nav-bar.module');

/**
 * @ngdoc overview
 * @name dappstack
 * @description 
 * # dappstack
 *
 * Main module of the application.
 */

module.exports = angular.module('dappstackApp', [
//Vendor Modules
  'ngResource',
  uiRouter,
  'ngAnimate',
  'ngDialog',
  'angularFileUpload',
//In-App
  'lbServices', //-->Loopback-generated services
  'dappstackApp.common',
  'dappstackApp.components',
])

.constant('urlBase','http://0.0.0.0:3000/api')

.config( function($stateProvider, $urlServiceProvider, LoopBackResourceProvider, urlBase) {

  // Assign the URL lb-services uses to access the LoopBack REST API server
  LoopBackResourceProvider.setUrlBase(urlBase);

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
          }
        //   'profile-content@app.profile': {
        //     component: 'profileFavorites'
        //   }
        //  --> not in use, keep for ref
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
        url:'/:name/:dappId',
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
.run(function($rootScope, $transitions, $state, LoopBackAuth, authService) {    

  $transitions.onSuccess({}, function($transition$) {
    $rootScope.previousState = $transition$.$from().name;
  });

  // Get data from localstorage after page refresh
  // and load user data into rootscope.
  if (LoopBackAuth.accessTokenId && !$rootScope.currentUser) {
    authService.refresh(LoopBackAuth.accessTokenId);
  }

}).name;