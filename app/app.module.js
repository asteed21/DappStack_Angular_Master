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
//In-App
  'lbServices', //-->Loopback-generated services
  'dappstackApp.common',
  'dappstackApp.components',
])

/* Create provider to enable stateful modals,
works alongside normal $stateProvider service to apply routing to modals*/
.provider('modalState', function($stateProvider) {
    var provider = this;
    this.$get = function() {
        return provider;
    }
    this.state = function(stateName, options) {
        var modalInstance;
        $stateProvider.state(stateName, {
            url: options.url,
            onEnter: function($uibModal, $state, $stateParams) {
                console.log($stateParams.dappId);
                modalInstance = $uibModal.open(options);
                modalInstance.result['finally'](function() {
                    modalInstance = null;
                    if ($state.$current.name === stateName) {
                        $state.go('^');
                    }
                });
            },
            onExit: function() {
                if (modalInstance) {
                    modalInstance.close();
                }
            }
        });
    };
})

.config(function($stateProvider, $urlServiceProvider, modalStateProvider, LoopBackResourceProvider) {
  
  // Assign the URL lb-services uses to access the LoopBack REST API server
  LoopBackResourceProvider.setUrlBase('http://0.0.0.0:3000/api');

  //Configure routing for various URLs/states in the application
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

  modalStateProvider.state('app.dapps.dappdetails', {
        url:'/:dappId',
        size: 'lg',
        component: 'dappDialogComponent',
  });

  modalStateProvider.state('app.dappdetails', {
        url:'dapps/:dappId',
        size: 'lg',
        component: 'dappDialogComponent',
  });

  $stateProvider.state('app.profile', {
        url:'profile',
        views: {
          'content@': {
            component: 'profile'
          }
        }
  });

  $stateProvider.state('login', {
        url:'/login',
        views: {
          'content@': {
            component: 'login'
          }
        }
  });

  $stateProvider.state('register', {
        url:'/register',
        views: {
          'content@': {
            component: 'register'
          }
        }
  });

  $urlServiceProvider.rules.otherwise({ state: 'app' })

});