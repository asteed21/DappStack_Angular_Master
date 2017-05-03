'use strict';

angular.module('dappstackApp.components.dapps')

    .factory('dappsFactory', ['$http', function($http) {

    var urlBase = '../../mockdata.json';
    var dappsFactory = {};

    dappsFactory.getDapps = function() {
        return $http.get(urlBase).then(function(response){
            return response.data.dapps;
        });
    };

    dappsFactory.getDapp = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    dappsFactory.insertDapp = function (dapp) {
        return $http.post(urlBase, cust);
    };

    dappsFactory.updateDapp = function (dapp) {
        return $http.put(urlBase + '/' + dapp.ID, dapp)
    };

    dappsFactory.deleteDapp = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    dappsFactory.getComments = function (id) {
        return $http.get(urlBase + '/' + id + '/comments');
    };

    return dappsFactory;
}]);