'use strict';

angular.module('dappstackApp.components.dapps')

  .factory("dappsFactory", function($resource, baseURL) {

    return $resource(baseURL + "/dapps/:id", null);
    
  });