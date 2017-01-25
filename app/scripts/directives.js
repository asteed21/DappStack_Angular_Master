'use strict';

angular.module('dappstackAngularMasterApp')

.directive('DappResults', function() {
    return {
        restrict: 'EA',
        templateUrl: 'results.html',
        scope: {
            'search-filter': '@'
        }
    }
})
;