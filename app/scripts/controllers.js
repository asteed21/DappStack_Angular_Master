'use strict';

angular.module('dappstackAngularMasterApp')

.controller('HeaderController', ['$scope', function($scope) {
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
}])
;