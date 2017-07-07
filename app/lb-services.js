// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "User",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Users/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Users/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Counts accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#create
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createMany
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsert
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Users",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Users/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsertWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Users/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#exists
             * @methodOf lbServices.User
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Users/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#find
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findOne
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Users/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#updateAll
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Users/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#deleteById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#count
             * @methodOf lbServices.User
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$updateAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Users/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createChangeStream
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Users/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#login
             * @methodOf lbServices.User
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Users/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#logout
             * @methodOf lbServices.User
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#confirm
             * @methodOf lbServices.User
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Users/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#resetPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Users/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getCurrent
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.User#updateOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreateWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.User#update
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.User#destroyById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#removeById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#patchAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.User#modelName
        * @propertyOf lbServices.User
        * @description
        * The name of the model represented by this $resource,
        * i.e. `User`.
        */
        R.modelName = "User";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Dapps
 * @header lbServices.Dapps
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Dapps` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Dapps",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Dapps/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Dapps.owners.findById() instead.
            "prototype$__findById__owners": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/owners/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dapps.owners.destroyById() instead.
            "prototype$__destroyById__owners": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/owners/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dapps.owners.updateById() instead.
            "prototype$__updateById__owners": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/owners/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dapps.comments.findById() instead.
            "prototype$__findById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/comments/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dapps.comments.destroyById() instead.
            "prototype$__destroyById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/comments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dapps.comments.updateById() instead.
            "prototype$__updateById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/comments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dapps.favorites.findById() instead.
            "prototype$__findById__favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/favorites/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dapps.favorites.destroyById() instead.
            "prototype$__destroyById__favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/favorites/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dapps.favorites.updateById() instead.
            "prototype$__updateById__favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/favorites/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dapps.likes.findById() instead.
            "prototype$__findById__likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/likes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dapps.likes.destroyById() instead.
            "prototype$__destroyById__likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/likes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dapps.likes.updateById() instead.
            "prototype$__updateById__likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/likes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dapps.owners() instead.
            "prototype$__get__owners": {
              isArray: true,
              url: urlBase + "/Dapps/:id/owners",
              method: "GET",
            },

            // INTERNAL. Use Dapps.owners.create() instead.
            "prototype$__create__owners": {
              url: urlBase + "/Dapps/:id/owners",
              method: "POST",
            },

            // INTERNAL. Use Dapps.owners.destroyAll() instead.
            "prototype$__delete__owners": {
              url: urlBase + "/Dapps/:id/owners",
              method: "DELETE",
            },

            // INTERNAL. Use Dapps.owners.count() instead.
            "prototype$__count__owners": {
              url: urlBase + "/Dapps/:id/owners/count",
              method: "GET",
            },

            // INTERNAL. Use Dapps.comments() instead.
            "prototype$__get__comments": {
              isArray: true,
              url: urlBase + "/Dapps/:id/comments",
              method: "GET",
            },

            // INTERNAL. Use Dapps.comments.create() instead.
            "prototype$__create__comments": {
              url: urlBase + "/Dapps/:id/comments",
              method: "POST",
            },

            // INTERNAL. Use Dapps.comments.destroyAll() instead.
            "prototype$__delete__comments": {
              url: urlBase + "/Dapps/:id/comments",
              method: "DELETE",
            },

            // INTERNAL. Use Dapps.comments.count() instead.
            "prototype$__count__comments": {
              url: urlBase + "/Dapps/:id/comments/count",
              method: "GET",
            },

            // INTERNAL. Use Dapps.favorites() instead.
            "prototype$__get__favorites": {
              isArray: true,
              url: urlBase + "/Dapps/:id/favorites",
              method: "GET",
            },

            // INTERNAL. Use Dapps.favorites.create() instead.
            "prototype$__create__favorites": {
              url: urlBase + "/Dapps/:id/favorites",
              method: "POST",
            },

            // INTERNAL. Use Dapps.favorites.destroyAll() instead.
            "prototype$__delete__favorites": {
              url: urlBase + "/Dapps/:id/favorites",
              method: "DELETE",
            },

            // INTERNAL. Use Dapps.favorites.count() instead.
            "prototype$__count__favorites": {
              url: urlBase + "/Dapps/:id/favorites/count",
              method: "GET",
            },

            // INTERNAL. Use Dapps.likes() instead.
            "prototype$__get__likes": {
              isArray: true,
              url: urlBase + "/Dapps/:id/likes",
              method: "GET",
            },

            // INTERNAL. Use Dapps.likes.create() instead.
            "prototype$__create__likes": {
              url: urlBase + "/Dapps/:id/likes",
              method: "POST",
            },

            // INTERNAL. Use Dapps.likes.destroyAll() instead.
            "prototype$__delete__likes": {
              url: urlBase + "/Dapps/:id/likes",
              method: "DELETE",
            },

            // INTERNAL. Use Dapps.likes.count() instead.
            "prototype$__count__likes": {
              url: urlBase + "/Dapps/:id/likes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapps#create
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dapps` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Dapps",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapps#createMany
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dapps` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Dapps",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapps#upsert
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dapps` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Dapps",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapps#replaceOrCreate
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dapps` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Dapps/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapps#upsertWithWhere
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dapps` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Dapps/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapps#exists
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Dapps/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapps#findById
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dapps` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Dapps/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapps#replaceById
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dapps` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Dapps/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapps#find
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dapps` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Dapps",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapps#findOne
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dapps` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Dapps/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapps#updateAll
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Dapps/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapps#deleteById
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dapps` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Dapps/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapps#count
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Dapps/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapps#prototype$updateAttributes
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dapps` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Dapps/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapps#createChangeStream
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Dapps/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Favorites.dapps() instead.
            "::get::Favorites::dapps": {
              url: urlBase + "/Favorites/:id/dapps",
              method: "GET",
            },

            // INTERNAL. Use Likes.dapps() instead.
            "::get::Likes::dapps": {
              url: urlBase + "/Likes/:id/dapps",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Dapps#patchOrCreate
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dapps` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Dapps#updateOrCreate
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dapps` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Dapps#patchOrCreateWithWhere
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dapps` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Dapps#update
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Dapps#destroyById
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dapps` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Dapps#removeById
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dapps` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Dapps#patchAttributes
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dapps` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Dapps#modelName
        * @propertyOf lbServices.Dapps
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Dapps`.
        */
        R.modelName = "Dapps";

    /**
     * @ngdoc object
     * @name lbServices.Dapps.owners
     * @header lbServices.Dapps.owners
     * @object
     * @description
     *
     * The object `Dapps.owners` groups methods
     * manipulating `DappStackUser` instances related to `Dapps`.
     *
     * Call {@link lbServices.Dapps#owners Dapps.owners()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Dapps#owners
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Queries owners of Dapps.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
        R.owners = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::get::Dapps::owners"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.owners#count
             * @methodOf lbServices.Dapps.owners
             *
             * @description
             *
             * Counts owners of Dapps.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.owners.count = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::count::Dapps::owners"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.owners#create
             * @methodOf lbServices.Dapps.owners
             *
             * @description
             *
             * Creates a new instance in owners of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
        R.owners.create = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::create::Dapps::owners"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.owners#createMany
             * @methodOf lbServices.Dapps.owners
             *
             * @description
             *
             * Creates a new instance in owners of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
        R.owners.createMany = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::createMany::Dapps::owners"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.owners#destroyAll
             * @methodOf lbServices.Dapps.owners
             *
             * @description
             *
             * Deletes all owners of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.owners.destroyAll = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::delete::Dapps::owners"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.owners#destroyById
             * @methodOf lbServices.Dapps.owners
             *
             * @description
             *
             * Delete a related item by id for owners.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `fk` – `{*}` - Foreign key for owners
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.owners.destroyById = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::destroyById::Dapps::owners"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.owners#findById
             * @methodOf lbServices.Dapps.owners
             *
             * @description
             *
             * Find a related item by id for owners.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `fk` – `{*}` - Foreign key for owners
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
        R.owners.findById = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::findById::Dapps::owners"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.owners#updateById
             * @methodOf lbServices.Dapps.owners
             *
             * @description
             *
             * Update a related item by id for owners.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `fk` – `{*}` - Foreign key for owners
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
        R.owners.updateById = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::updateById::Dapps::owners"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Dapps.comments
     * @header lbServices.Dapps.comments
     * @object
     * @description
     *
     * The object `Dapps.comments` groups methods
     * manipulating `Comments` instances related to `Dapps`.
     *
     * Call {@link lbServices.Dapps#comments Dapps.comments()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Dapps#comments
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Queries comments of Dapps.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R.comments = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::get::Dapps::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.comments#count
             * @methodOf lbServices.Dapps.comments
             *
             * @description
             *
             * Counts comments of Dapps.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.comments.count = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::count::Dapps::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.comments#create
             * @methodOf lbServices.Dapps.comments
             *
             * @description
             *
             * Creates a new instance in comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R.comments.create = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::create::Dapps::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.comments#createMany
             * @methodOf lbServices.Dapps.comments
             *
             * @description
             *
             * Creates a new instance in comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R.comments.createMany = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::createMany::Dapps::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.comments#destroyAll
             * @methodOf lbServices.Dapps.comments
             *
             * @description
             *
             * Deletes all comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::delete::Dapps::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.comments#destroyById
             * @methodOf lbServices.Dapps.comments
             *
             * @description
             *
             * Delete a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::destroyById::Dapps::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.comments#findById
             * @methodOf lbServices.Dapps.comments
             *
             * @description
             *
             * Find a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R.comments.findById = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::findById::Dapps::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.comments#updateById
             * @methodOf lbServices.Dapps.comments
             *
             * @description
             *
             * Update a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::updateById::Dapps::comments"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Dapps.favorites
     * @header lbServices.Dapps.favorites
     * @object
     * @description
     *
     * The object `Dapps.favorites` groups methods
     * manipulating `Favorites` instances related to `Dapps`.
     *
     * Call {@link lbServices.Dapps#favorites Dapps.favorites()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Dapps#favorites
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Queries favorites of Dapps.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
        R.favorites = function() {
          var TargetResource = $injector.get("Favorites");
          var action = TargetResource["::get::Dapps::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.favorites#count
             * @methodOf lbServices.Dapps.favorites
             *
             * @description
             *
             * Counts favorites of Dapps.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.favorites.count = function() {
          var TargetResource = $injector.get("Favorites");
          var action = TargetResource["::count::Dapps::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.favorites#create
             * @methodOf lbServices.Dapps.favorites
             *
             * @description
             *
             * Creates a new instance in favorites of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
        R.favorites.create = function() {
          var TargetResource = $injector.get("Favorites");
          var action = TargetResource["::create::Dapps::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.favorites#createMany
             * @methodOf lbServices.Dapps.favorites
             *
             * @description
             *
             * Creates a new instance in favorites of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
        R.favorites.createMany = function() {
          var TargetResource = $injector.get("Favorites");
          var action = TargetResource["::createMany::Dapps::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.favorites#destroyAll
             * @methodOf lbServices.Dapps.favorites
             *
             * @description
             *
             * Deletes all favorites of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.favorites.destroyAll = function() {
          var TargetResource = $injector.get("Favorites");
          var action = TargetResource["::delete::Dapps::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.favorites#destroyById
             * @methodOf lbServices.Dapps.favorites
             *
             * @description
             *
             * Delete a related item by id for favorites.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `fk` – `{*}` - Foreign key for favorites
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.favorites.destroyById = function() {
          var TargetResource = $injector.get("Favorites");
          var action = TargetResource["::destroyById::Dapps::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.favorites#findById
             * @methodOf lbServices.Dapps.favorites
             *
             * @description
             *
             * Find a related item by id for favorites.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `fk` – `{*}` - Foreign key for favorites
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
        R.favorites.findById = function() {
          var TargetResource = $injector.get("Favorites");
          var action = TargetResource["::findById::Dapps::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.favorites#updateById
             * @methodOf lbServices.Dapps.favorites
             *
             * @description
             *
             * Update a related item by id for favorites.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `fk` – `{*}` - Foreign key for favorites
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
        R.favorites.updateById = function() {
          var TargetResource = $injector.get("Favorites");
          var action = TargetResource["::updateById::Dapps::favorites"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Dapps.likes
     * @header lbServices.Dapps.likes
     * @object
     * @description
     *
     * The object `Dapps.likes` groups methods
     * manipulating `Likes` instances related to `Dapps`.
     *
     * Call {@link lbServices.Dapps#likes Dapps.likes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Dapps#likes
             * @methodOf lbServices.Dapps
             *
             * @description
             *
             * Queries likes of Dapps.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
        R.likes = function() {
          var TargetResource = $injector.get("Likes");
          var action = TargetResource["::get::Dapps::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.likes#count
             * @methodOf lbServices.Dapps.likes
             *
             * @description
             *
             * Counts likes of Dapps.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.likes.count = function() {
          var TargetResource = $injector.get("Likes");
          var action = TargetResource["::count::Dapps::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.likes#create
             * @methodOf lbServices.Dapps.likes
             *
             * @description
             *
             * Creates a new instance in likes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
        R.likes.create = function() {
          var TargetResource = $injector.get("Likes");
          var action = TargetResource["::create::Dapps::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.likes#createMany
             * @methodOf lbServices.Dapps.likes
             *
             * @description
             *
             * Creates a new instance in likes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
        R.likes.createMany = function() {
          var TargetResource = $injector.get("Likes");
          var action = TargetResource["::createMany::Dapps::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.likes#destroyAll
             * @methodOf lbServices.Dapps.likes
             *
             * @description
             *
             * Deletes all likes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.likes.destroyAll = function() {
          var TargetResource = $injector.get("Likes");
          var action = TargetResource["::delete::Dapps::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.likes#destroyById
             * @methodOf lbServices.Dapps.likes
             *
             * @description
             *
             * Delete a related item by id for likes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `fk` – `{*}` - Foreign key for likes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.likes.destroyById = function() {
          var TargetResource = $injector.get("Likes");
          var action = TargetResource["::destroyById::Dapps::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.likes#findById
             * @methodOf lbServices.Dapps.likes
             *
             * @description
             *
             * Find a related item by id for likes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `fk` – `{*}` - Foreign key for likes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
        R.likes.findById = function() {
          var TargetResource = $injector.get("Likes");
          var action = TargetResource["::findById::Dapps::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapps.likes#updateById
             * @methodOf lbServices.Dapps.likes
             *
             * @description
             *
             * Update a related item by id for likes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dapps id
             *
             *  - `fk` – `{*}` - Foreign key for likes
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
        R.likes.updateById = function() {
          var TargetResource = $injector.get("Likes");
          var action = TargetResource["::updateById::Dapps::likes"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.DappStackUser
 * @header lbServices.DappStackUser
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `DappStackUser` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "DappStackUser",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/DappStackUsers/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__findById__accessTokens
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__destroyById__accessTokens
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__updateById__accessTokens
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/accessTokens/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__findById__roles
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Find a related item by id for roles.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `fk` – `{*}` - Foreign key for roles
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "prototype$__findById__roles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/roles/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__destroyById__roles
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Delete a related item by id for roles.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `fk` – `{*}` - Foreign key for roles
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__roles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/roles/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__updateById__roles
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Update a related item by id for roles.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `fk` – `{*}` - Foreign key for roles
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "prototype$__updateById__roles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/roles/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__link__roles
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Add a related item by id for roles.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `fk` – `{*}` - Foreign key for roles
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "prototype$__link__roles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/roles/rel/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__unlink__roles
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Remove the roles relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `fk` – `{*}` - Foreign key for roles
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__unlink__roles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/roles/rel/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__exists__roles
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Check the existence of roles relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `fk` – `{*}` - Foreign key for roles
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "prototype$__exists__roles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/roles/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use DappStackUser.comments.findById() instead.
            "prototype$__findById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/comments/:fk",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.comments.destroyById() instead.
            "prototype$__destroyById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/comments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.comments.updateById() instead.
            "prototype$__updateById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/comments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use DappStackUser.favorites.findById() instead.
            "prototype$__findById__favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/favorites/:fk",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.favorites.destroyById() instead.
            "prototype$__destroyById__favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/favorites/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.favorites.updateById() instead.
            "prototype$__updateById__favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/favorites/:fk",
              method: "PUT",
            },

            // INTERNAL. Use DappStackUser.likes.findById() instead.
            "prototype$__findById__likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/likes/:fk",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.likes.destroyById() instead.
            "prototype$__destroyById__likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/likes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.likes.updateById() instead.
            "prototype$__updateById__likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/likes/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__get__accessTokens
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Queries accessTokens of DappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/DappStackUsers/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__create__accessTokens
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/DappStackUsers/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__delete__accessTokens
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/DappStackUsers/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__count__accessTokens
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Counts accessTokens of DappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/DappStackUsers/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__get__roles
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Queries roles of DappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "prototype$__get__roles": {
              isArray: true,
              url: urlBase + "/DappStackUsers/:id/roles",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__create__roles
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Creates a new instance in roles of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "prototype$__create__roles": {
              url: urlBase + "/DappStackUsers/:id/roles",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__delete__roles
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Deletes all roles of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__roles": {
              url: urlBase + "/DappStackUsers/:id/roles",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__count__roles
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Counts roles of DappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__roles": {
              url: urlBase + "/DappStackUsers/:id/roles/count",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.comments() instead.
            "prototype$__get__comments": {
              isArray: true,
              url: urlBase + "/DappStackUsers/:id/comments",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.comments.create() instead.
            "prototype$__create__comments": {
              url: urlBase + "/DappStackUsers/:id/comments",
              method: "POST",
            },

            // INTERNAL. Use DappStackUser.comments.destroyAll() instead.
            "prototype$__delete__comments": {
              url: urlBase + "/DappStackUsers/:id/comments",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.comments.count() instead.
            "prototype$__count__comments": {
              url: urlBase + "/DappStackUsers/:id/comments/count",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.favorites() instead.
            "prototype$__get__favorites": {
              isArray: true,
              url: urlBase + "/DappStackUsers/:id/favorites",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.favorites.create() instead.
            "prototype$__create__favorites": {
              url: urlBase + "/DappStackUsers/:id/favorites",
              method: "POST",
            },

            // INTERNAL. Use DappStackUser.favorites.destroyAll() instead.
            "prototype$__delete__favorites": {
              url: urlBase + "/DappStackUsers/:id/favorites",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.favorites.count() instead.
            "prototype$__count__favorites": {
              url: urlBase + "/DappStackUsers/:id/favorites/count",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.likes() instead.
            "prototype$__get__likes": {
              isArray: true,
              url: urlBase + "/DappStackUsers/:id/likes",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.likes.create() instead.
            "prototype$__create__likes": {
              url: urlBase + "/DappStackUsers/:id/likes",
              method: "POST",
            },

            // INTERNAL. Use DappStackUser.likes.destroyAll() instead.
            "prototype$__delete__likes": {
              url: urlBase + "/DappStackUsers/:id/likes",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.likes.count() instead.
            "prototype$__count__likes": {
              url: urlBase + "/DappStackUsers/:id/likes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#create
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/DappStackUsers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#createMany
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/DappStackUsers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#upsert
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/DappStackUsers",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#replaceOrCreate
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/DappStackUsers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#upsertWithWhere
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/DappStackUsers/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#exists
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/DappStackUsers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#findById
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/DappStackUsers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#replaceById
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/DappStackUsers/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#find
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/DappStackUsers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#findOne
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/DappStackUsers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#updateAll
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/DappStackUsers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#deleteById
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/DappStackUsers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#count
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/DappStackUsers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$updateAttributes
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/DappStackUsers/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#createChangeStream
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/DappStackUsers/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#login
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/DappStackUsers/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#logout
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/DappStackUsers/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#confirm
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/DappStackUsers/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#resetPassword
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/DappStackUsers/reset",
              method: "POST",
            },

            // INTERNAL. Use Dapps.owners.findById() instead.
            "::findById::Dapps::owners": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/owners/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dapps.owners.destroyById() instead.
            "::destroyById::Dapps::owners": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/owners/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dapps.owners.updateById() instead.
            "::updateById::Dapps::owners": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/owners/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dapps.owners() instead.
            "::get::Dapps::owners": {
              isArray: true,
              url: urlBase + "/Dapps/:id/owners",
              method: "GET",
            },

            // INTERNAL. Use Dapps.owners.create() instead.
            "::create::Dapps::owners": {
              url: urlBase + "/Dapps/:id/owners",
              method: "POST",
            },

            // INTERNAL. Use Dapps.owners.createMany() instead.
            "::createMany::Dapps::owners": {
              isArray: true,
              url: urlBase + "/Dapps/:id/owners",
              method: "POST",
            },

            // INTERNAL. Use Dapps.owners.destroyAll() instead.
            "::delete::Dapps::owners": {
              url: urlBase + "/Dapps/:id/owners",
              method: "DELETE",
            },

            // INTERNAL. Use Dapps.owners.count() instead.
            "::count::Dapps::owners": {
              url: urlBase + "/Dapps/:id/owners/count",
              method: "GET",
            },

            // INTERNAL. Use Comments.author() instead.
            "::get::Comments::author": {
              url: urlBase + "/Comments/:id/author",
              method: "GET",
            },

            // INTERNAL. Use Favorites.dappStackUser() instead.
            "::get::Favorites::dappStackUser": {
              url: urlBase + "/Favorites/:id/dappStackUser",
              method: "GET",
            },

            // INTERNAL. Use Likes.dappStackUser() instead.
            "::get::Likes::dappStackUser": {
              url: urlBase + "/Likes/:id/dappStackUser",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#getCurrent
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/DappStackUsers" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#patchOrCreate
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#updateOrCreate
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#patchOrCreateWithWhere
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#update
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#destroyById
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#removeById
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#patchAttributes
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.DappStackUser#getCachedCurrent
         * @methodOf lbServices.DappStackUser
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.DappStackUser#login} or
         * {@link lbServices.DappStackUser#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A DappStackUser instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.DappStackUser#isAuthenticated
         * @methodOf lbServices.DappStackUser
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.DappStackUser#getCurrentId
         * @methodOf lbServices.DappStackUser
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.DappStackUser#modelName
        * @propertyOf lbServices.DappStackUser
        * @description
        * The name of the model represented by this $resource,
        * i.e. `DappStackUser`.
        */
        R.modelName = "DappStackUser";

    /**
     * @ngdoc object
     * @name lbServices.DappStackUser.comments
     * @header lbServices.DappStackUser.comments
     * @object
     * @description
     *
     * The object `DappStackUser.comments` groups methods
     * manipulating `Comments` instances related to `DappStackUser`.
     *
     * Call {@link lbServices.DappStackUser#comments DappStackUser.comments()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#comments
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Queries comments of DappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R.comments = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::get::DappStackUser::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.comments#count
             * @methodOf lbServices.DappStackUser.comments
             *
             * @description
             *
             * Counts comments of DappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.comments.count = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::count::DappStackUser::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.comments#create
             * @methodOf lbServices.DappStackUser.comments
             *
             * @description
             *
             * Creates a new instance in comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R.comments.create = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::create::DappStackUser::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.comments#createMany
             * @methodOf lbServices.DappStackUser.comments
             *
             * @description
             *
             * Creates a new instance in comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R.comments.createMany = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::createMany::DappStackUser::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.comments#destroyAll
             * @methodOf lbServices.DappStackUser.comments
             *
             * @description
             *
             * Deletes all comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::delete::DappStackUser::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.comments#destroyById
             * @methodOf lbServices.DappStackUser.comments
             *
             * @description
             *
             * Delete a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::destroyById::DappStackUser::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.comments#findById
             * @methodOf lbServices.DappStackUser.comments
             *
             * @description
             *
             * Find a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R.comments.findById = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::findById::DappStackUser::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.comments#updateById
             * @methodOf lbServices.DappStackUser.comments
             *
             * @description
             *
             * Update a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::updateById::DappStackUser::comments"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.DappStackUser.favorites
     * @header lbServices.DappStackUser.favorites
     * @object
     * @description
     *
     * The object `DappStackUser.favorites` groups methods
     * manipulating `Favorites` instances related to `DappStackUser`.
     *
     * Call {@link lbServices.DappStackUser#favorites DappStackUser.favorites()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#favorites
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Queries favorites of DappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
        R.favorites = function() {
          var TargetResource = $injector.get("Favorites");
          var action = TargetResource["::get::DappStackUser::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.favorites#count
             * @methodOf lbServices.DappStackUser.favorites
             *
             * @description
             *
             * Counts favorites of DappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.favorites.count = function() {
          var TargetResource = $injector.get("Favorites");
          var action = TargetResource["::count::DappStackUser::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.favorites#create
             * @methodOf lbServices.DappStackUser.favorites
             *
             * @description
             *
             * Creates a new instance in favorites of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
        R.favorites.create = function() {
          var TargetResource = $injector.get("Favorites");
          var action = TargetResource["::create::DappStackUser::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.favorites#createMany
             * @methodOf lbServices.DappStackUser.favorites
             *
             * @description
             *
             * Creates a new instance in favorites of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
        R.favorites.createMany = function() {
          var TargetResource = $injector.get("Favorites");
          var action = TargetResource["::createMany::DappStackUser::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.favorites#destroyAll
             * @methodOf lbServices.DappStackUser.favorites
             *
             * @description
             *
             * Deletes all favorites of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.favorites.destroyAll = function() {
          var TargetResource = $injector.get("Favorites");
          var action = TargetResource["::delete::DappStackUser::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.favorites#destroyById
             * @methodOf lbServices.DappStackUser.favorites
             *
             * @description
             *
             * Delete a related item by id for favorites.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `fk` – `{*}` - Foreign key for favorites
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.favorites.destroyById = function() {
          var TargetResource = $injector.get("Favorites");
          var action = TargetResource["::destroyById::DappStackUser::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.favorites#findById
             * @methodOf lbServices.DappStackUser.favorites
             *
             * @description
             *
             * Find a related item by id for favorites.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `fk` – `{*}` - Foreign key for favorites
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
        R.favorites.findById = function() {
          var TargetResource = $injector.get("Favorites");
          var action = TargetResource["::findById::DappStackUser::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.favorites#updateById
             * @methodOf lbServices.DappStackUser.favorites
             *
             * @description
             *
             * Update a related item by id for favorites.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `fk` – `{*}` - Foreign key for favorites
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
        R.favorites.updateById = function() {
          var TargetResource = $injector.get("Favorites");
          var action = TargetResource["::updateById::DappStackUser::favorites"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.DappStackUser.likes
     * @header lbServices.DappStackUser.likes
     * @object
     * @description
     *
     * The object `DappStackUser.likes` groups methods
     * manipulating `Likes` instances related to `DappStackUser`.
     *
     * Call {@link lbServices.DappStackUser#likes DappStackUser.likes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#likes
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Queries likes of DappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
        R.likes = function() {
          var TargetResource = $injector.get("Likes");
          var action = TargetResource["::get::DappStackUser::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.likes#count
             * @methodOf lbServices.DappStackUser.likes
             *
             * @description
             *
             * Counts likes of DappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.likes.count = function() {
          var TargetResource = $injector.get("Likes");
          var action = TargetResource["::count::DappStackUser::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.likes#create
             * @methodOf lbServices.DappStackUser.likes
             *
             * @description
             *
             * Creates a new instance in likes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
        R.likes.create = function() {
          var TargetResource = $injector.get("Likes");
          var action = TargetResource["::create::DappStackUser::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.likes#createMany
             * @methodOf lbServices.DappStackUser.likes
             *
             * @description
             *
             * Creates a new instance in likes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
        R.likes.createMany = function() {
          var TargetResource = $injector.get("Likes");
          var action = TargetResource["::createMany::DappStackUser::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.likes#destroyAll
             * @methodOf lbServices.DappStackUser.likes
             *
             * @description
             *
             * Deletes all likes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.likes.destroyAll = function() {
          var TargetResource = $injector.get("Likes");
          var action = TargetResource["::delete::DappStackUser::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.likes#destroyById
             * @methodOf lbServices.DappStackUser.likes
             *
             * @description
             *
             * Delete a related item by id for likes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `fk` – `{*}` - Foreign key for likes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.likes.destroyById = function() {
          var TargetResource = $injector.get("Likes");
          var action = TargetResource["::destroyById::DappStackUser::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.likes#findById
             * @methodOf lbServices.DappStackUser.likes
             *
             * @description
             *
             * Find a related item by id for likes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `fk` – `{*}` - Foreign key for likes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
        R.likes.findById = function() {
          var TargetResource = $injector.get("Likes");
          var action = TargetResource["::findById::DappStackUser::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser.likes#updateById
             * @methodOf lbServices.DappStackUser.likes
             *
             * @description
             *
             * Update a related item by id for likes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DappStackUser id
             *
             *  - `fk` – `{*}` - Foreign key for likes
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
        R.likes.updateById = function() {
          var TargetResource = $injector.get("Likes");
          var action = TargetResource["::updateById::DappStackUser::likes"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Comments
 * @header lbServices.Comments
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Comments` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Comments",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Comments/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Comments.author() instead.
            "prototype$__get__author": {
              url: urlBase + "/Comments/:id/author",
              method: "GET",
            },

            // INTERNAL. Use Comments.comments.findById() instead.
            "prototype$__findById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Comments/:id/comments/:fk",
              method: "GET",
            },

            // INTERNAL. Use Comments.comments.destroyById() instead.
            "prototype$__destroyById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Comments/:id/comments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Comments.comments.updateById() instead.
            "prototype$__updateById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Comments/:id/comments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Comments.comments() instead.
            "prototype$__get__comments": {
              isArray: true,
              url: urlBase + "/Comments/:id/comments",
              method: "GET",
            },

            // INTERNAL. Use Comments.comments.create() instead.
            "prototype$__create__comments": {
              url: urlBase + "/Comments/:id/comments",
              method: "POST",
            },

            // INTERNAL. Use Comments.comments.destroyAll() instead.
            "prototype$__delete__comments": {
              url: urlBase + "/Comments/:id/comments",
              method: "DELETE",
            },

            // INTERNAL. Use Comments.comments.count() instead.
            "prototype$__count__comments": {
              url: urlBase + "/Comments/:id/comments/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comments#create
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Comments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comments#createMany
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Comments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comments#upsert
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Comments",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comments#replaceOrCreate
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Comments/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comments#upsertWithWhere
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Comments/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comments#exists
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Comments/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comments#findById
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Comments/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comments#replaceById
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Comments/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comments#find
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Comments",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comments#findOne
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Comments/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comments#updateAll
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Comments/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comments#deleteById
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Comments/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comments#count
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Comments/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comments#prototype$updateAttributes
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Comments id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Comments/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comments#createChangeStream
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Comments/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Dapps.comments.findById() instead.
            "::findById::Dapps::comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/comments/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dapps.comments.destroyById() instead.
            "::destroyById::Dapps::comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/comments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dapps.comments.updateById() instead.
            "::updateById::Dapps::comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/comments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dapps.comments() instead.
            "::get::Dapps::comments": {
              isArray: true,
              url: urlBase + "/Dapps/:id/comments",
              method: "GET",
            },

            // INTERNAL. Use Dapps.comments.create() instead.
            "::create::Dapps::comments": {
              url: urlBase + "/Dapps/:id/comments",
              method: "POST",
            },

            // INTERNAL. Use Dapps.comments.createMany() instead.
            "::createMany::Dapps::comments": {
              isArray: true,
              url: urlBase + "/Dapps/:id/comments",
              method: "POST",
            },

            // INTERNAL. Use Dapps.comments.destroyAll() instead.
            "::delete::Dapps::comments": {
              url: urlBase + "/Dapps/:id/comments",
              method: "DELETE",
            },

            // INTERNAL. Use Dapps.comments.count() instead.
            "::count::Dapps::comments": {
              url: urlBase + "/Dapps/:id/comments/count",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.comments.findById() instead.
            "::findById::DappStackUser::comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/comments/:fk",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.comments.destroyById() instead.
            "::destroyById::DappStackUser::comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/comments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.comments.updateById() instead.
            "::updateById::DappStackUser::comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/comments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use DappStackUser.comments() instead.
            "::get::DappStackUser::comments": {
              isArray: true,
              url: urlBase + "/DappStackUsers/:id/comments",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.comments.create() instead.
            "::create::DappStackUser::comments": {
              url: urlBase + "/DappStackUsers/:id/comments",
              method: "POST",
            },

            // INTERNAL. Use DappStackUser.comments.createMany() instead.
            "::createMany::DappStackUser::comments": {
              isArray: true,
              url: urlBase + "/DappStackUsers/:id/comments",
              method: "POST",
            },

            // INTERNAL. Use DappStackUser.comments.destroyAll() instead.
            "::delete::DappStackUser::comments": {
              url: urlBase + "/DappStackUsers/:id/comments",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.comments.count() instead.
            "::count::DappStackUser::comments": {
              url: urlBase + "/DappStackUsers/:id/comments/count",
              method: "GET",
            },

            // INTERNAL. Use Comments.comments.findById() instead.
            "::findById::Comments::comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Comments/:id/comments/:fk",
              method: "GET",
            },

            // INTERNAL. Use Comments.comments.destroyById() instead.
            "::destroyById::Comments::comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Comments/:id/comments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Comments.comments.updateById() instead.
            "::updateById::Comments::comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Comments/:id/comments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Comments.comments() instead.
            "::get::Comments::comments": {
              isArray: true,
              url: urlBase + "/Comments/:id/comments",
              method: "GET",
            },

            // INTERNAL. Use Comments.comments.create() instead.
            "::create::Comments::comments": {
              url: urlBase + "/Comments/:id/comments",
              method: "POST",
            },

            // INTERNAL. Use Comments.comments.createMany() instead.
            "::createMany::Comments::comments": {
              isArray: true,
              url: urlBase + "/Comments/:id/comments",
              method: "POST",
            },

            // INTERNAL. Use Comments.comments.destroyAll() instead.
            "::delete::Comments::comments": {
              url: urlBase + "/Comments/:id/comments",
              method: "DELETE",
            },

            // INTERNAL. Use Comments.comments.count() instead.
            "::count::Comments::comments": {
              url: urlBase + "/Comments/:id/comments/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Comments#patchOrCreate
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Comments#updateOrCreate
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Comments#patchOrCreateWithWhere
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Comments#update
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Comments#destroyById
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Comments#removeById
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Comments#patchAttributes
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Comments id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Comments#modelName
        * @propertyOf lbServices.Comments
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Comments`.
        */
        R.modelName = "Comments";


            /**
             * @ngdoc method
             * @name lbServices.Comments#author
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Fetches belongsTo relation author.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Comments id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
        R.author = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::get::Comments::author"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Comments.comments
     * @header lbServices.Comments.comments
     * @object
     * @description
     *
     * The object `Comments.comments` groups methods
     * manipulating `Comments` instances related to `Comments`.
     *
     * Call {@link lbServices.Comments#comments Comments.comments()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Comments#comments
             * @methodOf lbServices.Comments
             *
             * @description
             *
             * Queries comments of Comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Comments id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R.comments = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::get::Comments::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Comments.comments#count
             * @methodOf lbServices.Comments.comments
             *
             * @description
             *
             * Counts comments of Comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Comments id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.comments.count = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::count::Comments::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Comments.comments#create
             * @methodOf lbServices.Comments.comments
             *
             * @description
             *
             * Creates a new instance in comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Comments id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R.comments.create = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::create::Comments::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Comments.comments#createMany
             * @methodOf lbServices.Comments.comments
             *
             * @description
             *
             * Creates a new instance in comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Comments id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R.comments.createMany = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::createMany::Comments::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Comments.comments#destroyAll
             * @methodOf lbServices.Comments.comments
             *
             * @description
             *
             * Deletes all comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Comments id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::delete::Comments::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Comments.comments#destroyById
             * @methodOf lbServices.Comments.comments
             *
             * @description
             *
             * Delete a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Comments id
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::destroyById::Comments::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Comments.comments#findById
             * @methodOf lbServices.Comments.comments
             *
             * @description
             *
             * Find a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Comments id
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R.comments.findById = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::findById::Comments::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Comments.comments#updateById
             * @methodOf lbServices.Comments.comments
             *
             * @description
             *
             * Update a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Comments id
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Comments` object.)
             * </em>
             */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("Comments");
          var action = TargetResource["::updateById::Comments::comments"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Favorites
 * @header lbServices.Favorites
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Favorites` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Favorites",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Favorites/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Favorites.dappStackUser() instead.
            "prototype$__get__dappStackUser": {
              url: urlBase + "/Favorites/:id/dappStackUser",
              method: "GET",
            },

            // INTERNAL. Use Favorites.dapps() instead.
            "prototype$__get__dapps": {
              url: urlBase + "/Favorites/:id/dapps",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorites#create
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Favorites",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorites#createMany
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Favorites",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorites#upsert
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Favorites",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorites#replaceOrCreate
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Favorites/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorites#upsertWithWhere
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Favorites/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorites#exists
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Favorites/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorites#findById
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Favorites/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorites#replaceById
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Favorites/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorites#find
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Favorites",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorites#findOne
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Favorites/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorites#updateAll
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Favorites/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorites#deleteById
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Favorites/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorites#count
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Favorites/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorites#prototype$updateAttributes
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Favorites id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Favorites/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorites#createChangeStream
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Favorites/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Dapps.favorites.findById() instead.
            "::findById::Dapps::favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/favorites/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dapps.favorites.destroyById() instead.
            "::destroyById::Dapps::favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/favorites/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dapps.favorites.updateById() instead.
            "::updateById::Dapps::favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/favorites/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dapps.favorites() instead.
            "::get::Dapps::favorites": {
              isArray: true,
              url: urlBase + "/Dapps/:id/favorites",
              method: "GET",
            },

            // INTERNAL. Use Dapps.favorites.create() instead.
            "::create::Dapps::favorites": {
              url: urlBase + "/Dapps/:id/favorites",
              method: "POST",
            },

            // INTERNAL. Use Dapps.favorites.createMany() instead.
            "::createMany::Dapps::favorites": {
              isArray: true,
              url: urlBase + "/Dapps/:id/favorites",
              method: "POST",
            },

            // INTERNAL. Use Dapps.favorites.destroyAll() instead.
            "::delete::Dapps::favorites": {
              url: urlBase + "/Dapps/:id/favorites",
              method: "DELETE",
            },

            // INTERNAL. Use Dapps.favorites.count() instead.
            "::count::Dapps::favorites": {
              url: urlBase + "/Dapps/:id/favorites/count",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.favorites.findById() instead.
            "::findById::DappStackUser::favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/favorites/:fk",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.favorites.destroyById() instead.
            "::destroyById::DappStackUser::favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/favorites/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.favorites.updateById() instead.
            "::updateById::DappStackUser::favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/favorites/:fk",
              method: "PUT",
            },

            // INTERNAL. Use DappStackUser.favorites() instead.
            "::get::DappStackUser::favorites": {
              isArray: true,
              url: urlBase + "/DappStackUsers/:id/favorites",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.favorites.create() instead.
            "::create::DappStackUser::favorites": {
              url: urlBase + "/DappStackUsers/:id/favorites",
              method: "POST",
            },

            // INTERNAL. Use DappStackUser.favorites.createMany() instead.
            "::createMany::DappStackUser::favorites": {
              isArray: true,
              url: urlBase + "/DappStackUsers/:id/favorites",
              method: "POST",
            },

            // INTERNAL. Use DappStackUser.favorites.destroyAll() instead.
            "::delete::DappStackUser::favorites": {
              url: urlBase + "/DappStackUsers/:id/favorites",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.favorites.count() instead.
            "::count::DappStackUser::favorites": {
              url: urlBase + "/DappStackUsers/:id/favorites/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Favorites#patchOrCreate
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Favorites#updateOrCreate
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Favorites#patchOrCreateWithWhere
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Favorites#update
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Favorites#destroyById
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Favorites#removeById
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Favorites#patchAttributes
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Favorites id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Favorites` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Favorites#modelName
        * @propertyOf lbServices.Favorites
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Favorites`.
        */
        R.modelName = "Favorites";


            /**
             * @ngdoc method
             * @name lbServices.Favorites#dappStackUser
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Fetches belongsTo relation dappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Favorites id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
        R.dappStackUser = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::get::Favorites::dappStackUser"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Favorites#dapps
             * @methodOf lbServices.Favorites
             *
             * @description
             *
             * Fetches belongsTo relation dapps.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Favorites id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dapps` object.)
             * </em>
             */
        R.dapps = function() {
          var TargetResource = $injector.get("Dapps");
          var action = TargetResource["::get::Favorites::dapps"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Likes
 * @header lbServices.Likes
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Likes` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Likes",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Likes/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Likes.dappStackUser() instead.
            "prototype$__get__dappStackUser": {
              url: urlBase + "/Likes/:id/dappStackUser",
              method: "GET",
            },

            // INTERNAL. Use Likes.dapps() instead.
            "prototype$__get__dapps": {
              url: urlBase + "/Likes/:id/dapps",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Likes#create
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Likes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Likes#createMany
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Likes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Likes#upsert
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Likes",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Likes#replaceOrCreate
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Likes/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Likes#upsertWithWhere
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Likes/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Likes#exists
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Likes/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Likes#findById
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Likes/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Likes#replaceById
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Likes/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Likes#find
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Likes",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Likes#findOne
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Likes/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Likes#updateAll
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Likes/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Likes#deleteById
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Likes/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Likes#count
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Likes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Likes#prototype$updateAttributes
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Likes id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Likes/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Likes#createChangeStream
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Likes/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Dapps.likes.findById() instead.
            "::findById::Dapps::likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/likes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dapps.likes.destroyById() instead.
            "::destroyById::Dapps::likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/likes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dapps.likes.updateById() instead.
            "::updateById::Dapps::likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dapps/:id/likes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dapps.likes() instead.
            "::get::Dapps::likes": {
              isArray: true,
              url: urlBase + "/Dapps/:id/likes",
              method: "GET",
            },

            // INTERNAL. Use Dapps.likes.create() instead.
            "::create::Dapps::likes": {
              url: urlBase + "/Dapps/:id/likes",
              method: "POST",
            },

            // INTERNAL. Use Dapps.likes.createMany() instead.
            "::createMany::Dapps::likes": {
              isArray: true,
              url: urlBase + "/Dapps/:id/likes",
              method: "POST",
            },

            // INTERNAL. Use Dapps.likes.destroyAll() instead.
            "::delete::Dapps::likes": {
              url: urlBase + "/Dapps/:id/likes",
              method: "DELETE",
            },

            // INTERNAL. Use Dapps.likes.count() instead.
            "::count::Dapps::likes": {
              url: urlBase + "/Dapps/:id/likes/count",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.likes.findById() instead.
            "::findById::DappStackUser::likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/likes/:fk",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.likes.destroyById() instead.
            "::destroyById::DappStackUser::likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/likes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.likes.updateById() instead.
            "::updateById::DappStackUser::likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/DappStackUsers/:id/likes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use DappStackUser.likes() instead.
            "::get::DappStackUser::likes": {
              isArray: true,
              url: urlBase + "/DappStackUsers/:id/likes",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.likes.create() instead.
            "::create::DappStackUser::likes": {
              url: urlBase + "/DappStackUsers/:id/likes",
              method: "POST",
            },

            // INTERNAL. Use DappStackUser.likes.createMany() instead.
            "::createMany::DappStackUser::likes": {
              isArray: true,
              url: urlBase + "/DappStackUsers/:id/likes",
              method: "POST",
            },

            // INTERNAL. Use DappStackUser.likes.destroyAll() instead.
            "::delete::DappStackUser::likes": {
              url: urlBase + "/DappStackUsers/:id/likes",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.likes.count() instead.
            "::count::DappStackUser::likes": {
              url: urlBase + "/DappStackUsers/:id/likes/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Likes#patchOrCreate
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Likes#updateOrCreate
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Likes#patchOrCreateWithWhere
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Likes#update
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Likes#destroyById
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Likes#removeById
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Likes#patchAttributes
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Likes id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Likes` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Likes#modelName
        * @propertyOf lbServices.Likes
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Likes`.
        */
        R.modelName = "Likes";


            /**
             * @ngdoc method
             * @name lbServices.Likes#dappStackUser
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Fetches belongsTo relation dappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Likes id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DappStackUser` object.)
             * </em>
             */
        R.dappStackUser = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::get::Likes::dappStackUser"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Likes#dapps
             * @methodOf lbServices.Likes
             *
             * @description
             *
             * Fetches belongsTo relation dapps.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Likes id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dapps` object.)
             * </em>
             */
        R.dapps = function() {
          var TargetResource = $injector.get("Dapps");
          var action = TargetResource["::get::Likes::dapps"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Attachments
 * @header lbServices.Attachments
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Attachments` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Attachments",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Attachments/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Attachments#getContainers
             * @methodOf lbServices.Attachments
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Attachments` object.)
             * </em>
             */
            "getContainers": {
              isArray: true,
              url: urlBase + "/Attachments",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Attachments#createContainer
             * @methodOf lbServices.Attachments
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Attachments` object.)
             * </em>
             */
            "createContainer": {
              url: urlBase + "/Attachments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Attachments#destroyContainer
             * @methodOf lbServices.Attachments
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `` – `{undefined=}` -
             */
            "destroyContainer": {
              url: urlBase + "/Attachments/:container",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Attachments#getContainer
             * @methodOf lbServices.Attachments
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Attachments` object.)
             * </em>
             */
            "getContainer": {
              url: urlBase + "/Attachments/:container",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Attachments#getFiles
             * @methodOf lbServices.Attachments
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Attachments` object.)
             * </em>
             */
            "getFiles": {
              isArray: true,
              url: urlBase + "/Attachments/:container/files",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Attachments#getFile
             * @methodOf lbServices.Attachments
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Attachments` object.)
             * </em>
             */
            "getFile": {
              url: urlBase + "/Attachments/:container/files/:file",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Attachments#removeFile
             * @methodOf lbServices.Attachments
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `` – `{undefined=}` -
             */
            "removeFile": {
              url: urlBase + "/Attachments/:container/files/:file",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Attachments#upload
             * @methodOf lbServices.Attachments
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `result` – `{object=}` -
             */
            "upload": {
              url: urlBase + "/Attachments/:container/upload",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Attachments#download
             * @methodOf lbServices.Attachments
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "download": {
              url: urlBase + "/Attachments/:container/download/:file",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Attachments#modelName
        * @propertyOf lbServices.Attachments
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Attachments`.
        */
        R.modelName = "Attachments";



        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
