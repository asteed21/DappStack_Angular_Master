'use strict';

angular.module('dappstackApp.common.auth')

    .factory('authService', ['DappStackUser', '$q', '$rootScope', 'ngDialog', function(DappStackUser, $q, $rootScope, ngDialog) {
    
        function login(params, credentials) {
            return DappStackUser.login(params, credentials)
            .$promise.then(
                function(response) {
                    $rootScope.currentUser = {
                        id: response.user.id,
                        tokenId: response.id,
                        email: response.user.email,
                        username: response.user.username
                    };
                    console.log($rootScope.currentUser);
                    console.log(DappStackUser.getCurrentId());
                    $rootScope.$broadcast('login:Successful');
                },
                function(response){

                    var message = '\
                        <div class="ngdialog-message">\
                        <div><h3>Login Unsuccessful</h3></div>' +
                            '<div><p>' +  response.data.error.message + '</p><p>' +
                            response.data.error.name + '</p></div>' +
                        '<div class="ngdialog-buttons">\
                            <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click=confirm("OK")>OK</button>\
                        </div>'
                    
                    ngDialog.openConfirm({ template: message, plain: 'true'});
                });
        }
        
        function isAuthenticated() {
            return DappStackUser.isAuthenticated();
        }
        
        function getUserName() {
            return $rootScope.currentUser.username;
        }

        function getCurrentId() {
            return DappStackUser.getCurrentId();
        }

        function logout() {
            return DappStackUser.logout().$promise.then(
                function() {
                    console.log("logged out");
                    $rootScope.currentUser = null;
                    $rootScope.$broadcast('logout:Successful');
                },
                function(response) {
                    console.log("Error: " + response.status + " " + response.statusText);
                }
            );
        }

        function refresh(accessTokenId) {
            return DappStackUser
            .getCurrent().$promise.then(
                function(response) {
                    $rootScope.currentUser = {
                        id: response.id,
                        tokenId: accessTokenId,
                        email: response.email,
                        username: response.username
                    }
                    $rootScope.$broadcast('login:Successful');
                },
                function (response) {
                    console.log("Error: " + response.status + " " + response.statusText);
                }
            );
        }        

        function register(registerData) {
            var date = new Date();
            var dateSubmitted = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
            return DappStackUser
            .create({
                username: registerData.username,
                email: registerData.email,
                password: registerData.password,
                firstName: registerData.firstname,
                lastName: registerData.lastname,
                joinDate: dateSubmitted
            })
            .$promise.then(
                function(response) {
                    console.log(response);
                    // $rootScope.currentUser = {
                    //     id: response.id,
                    //     email: registerData.email,
                    //     username: registerData.username
                    // };
                    $rootScope.$broadcast('registration:Successful');
                },
                function(response){
                    var message = '\
                    <div class="ngdialog-message">\
                    <div><h3>Registration Unsuccessful</h3></div>' +
                    '<div><p>' +  response.data.error.message + 
                    '</p><p>' + response.data.error.name + '</p></div>';

                    ngDialog.openConfirm({ template: message, plain: 'true'});

                }
            );
        }

        return {
            login: login, 
            logout: logout,
            register: register,
            isAuthenticated: isAuthenticated,
            getUserName: getUserName,
            refresh: refresh,
            getCurrentId: getCurrentId
        };
    }])

    //factory for managing localstorage functions --> aiding in login persistence and auth factory functions
    .factory('$localStorage', ['$window', function ($window) {
        return {
            store: function (key, value) {
                $window.localStorage[key] = value;
            },
            get: function (key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            remove: function (key) {
                $window.localStorage.removeItem(key);
            },
            storeObject: function (key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function (key, defaultValue) {
                return JSON.parse($window.localStorage[key] || defaultValue);
            }
        }
    }])
;
