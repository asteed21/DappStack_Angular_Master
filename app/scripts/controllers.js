'use strict';

angular.module('dappstackAngularMasterApp')

//Header Controller
.controller('HeaderController', ['$scope', function($scope) {
  //TODO: update to either include search controller or search controller functionality
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
}])

//Main (Home) Controller
.controller('MainController', ['$scope', function($scope) {

}])

// .controller('SearchBoxController', ['$scope', function($scope) {
// //may or  may not be needed if can put in header controller
// }])

//DappModal Controller

//About Controller

//Contact Controller: (including for form submission?)

//Login Controller

//Signup Controller

//Profile Controller

//Favorites Controller

;