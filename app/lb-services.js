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
 * @name lbServices.Dapp
 * @header lbServices.Dapp
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Dapp` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Dapp",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/dapps/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Dapp.comments.findById() instead.
            "prototype$__findById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/comments/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dapp.comments.destroyById() instead.
            "prototype$__destroyById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/comments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dapp.comments.updateById() instead.
            "prototype$__updateById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/comments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dapp.favorites.findById() instead.
            "prototype$__findById__favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/favorites/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dapp.favorites.destroyById() instead.
            "prototype$__destroyById__favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/favorites/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dapp.favorites.updateById() instead.
            "prototype$__updateById__favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/favorites/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dapp.likes.findById() instead.
            "prototype$__findById__likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/likes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dapp.likes.destroyById() instead.
            "prototype$__destroyById__likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/likes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dapp.likes.updateById() instead.
            "prototype$__updateById__likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/likes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dapp.teamMembers.findById() instead.
            "prototype$__findById__teamMembers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/teamMembers/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dapp.teamMembers.destroyById() instead.
            "prototype$__destroyById__teamMembers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/teamMembers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dapp.teamMembers.updateById() instead.
            "prototype$__updateById__teamMembers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/teamMembers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dapp.teamMembers.link() instead.
            "prototype$__link__teamMembers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/teamMembers/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dapp.teamMembers.unlink() instead.
            "prototype$__unlink__teamMembers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/teamMembers/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dapp.teamMembers.exists() instead.
            "prototype$__exists__teamMembers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/teamMembers/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Dapp.comments() instead.
            "prototype$__get__comments": {
              isArray: true,
              url: urlBase + "/dapps/:id/comments",
              method: "GET",
            },

            // INTERNAL. Use Dapp.comments.create() instead.
            "prototype$__create__comments": {
              url: urlBase + "/dapps/:id/comments",
              method: "POST",
            },

            // INTERNAL. Use Dapp.comments.destroyAll() instead.
            "prototype$__delete__comments": {
              url: urlBase + "/dapps/:id/comments",
              method: "DELETE",
            },

            // INTERNAL. Use Dapp.comments.count() instead.
            "prototype$__count__comments": {
              url: urlBase + "/dapps/:id/comments/count",
              method: "GET",
            },

            // INTERNAL. Use Dapp.favorites() instead.
            "prototype$__get__favorites": {
              isArray: true,
              url: urlBase + "/dapps/:id/favorites",
              method: "GET",
            },

            // INTERNAL. Use Dapp.favorites.create() instead.
            "prototype$__create__favorites": {
              url: urlBase + "/dapps/:id/favorites",
              method: "POST",
            },

            // INTERNAL. Use Dapp.favorites.destroyAll() instead.
            "prototype$__delete__favorites": {
              url: urlBase + "/dapps/:id/favorites",
              method: "DELETE",
            },

            // INTERNAL. Use Dapp.favorites.count() instead.
            "prototype$__count__favorites": {
              url: urlBase + "/dapps/:id/favorites/count",
              method: "GET",
            },

            // INTERNAL. Use Dapp.likes() instead.
            "prototype$__get__likes": {
              isArray: true,
              url: urlBase + "/dapps/:id/likes",
              method: "GET",
            },

            // INTERNAL. Use Dapp.likes.create() instead.
            "prototype$__create__likes": {
              url: urlBase + "/dapps/:id/likes",
              method: "POST",
            },

            // INTERNAL. Use Dapp.likes.destroyAll() instead.
            "prototype$__delete__likes": {
              url: urlBase + "/dapps/:id/likes",
              method: "DELETE",
            },

            // INTERNAL. Use Dapp.likes.count() instead.
            "prototype$__count__likes": {
              url: urlBase + "/dapps/:id/likes/count",
              method: "GET",
            },

            // INTERNAL. Use Dapp.teamMembers() instead.
            "prototype$__get__teamMembers": {
              isArray: true,
              url: urlBase + "/dapps/:id/teamMembers",
              method: "GET",
            },

            // INTERNAL. Use Dapp.teamMembers.create() instead.
            "prototype$__create__teamMembers": {
              url: urlBase + "/dapps/:id/teamMembers",
              method: "POST",
            },

            // INTERNAL. Use Dapp.teamMembers.destroyAll() instead.
            "prototype$__delete__teamMembers": {
              url: urlBase + "/dapps/:id/teamMembers",
              method: "DELETE",
            },

            // INTERNAL. Use Dapp.teamMembers.count() instead.
            "prototype$__count__teamMembers": {
              url: urlBase + "/dapps/:id/teamMembers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapp#create
             * @methodOf lbServices.Dapp
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/dapps",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapp#createMany
             * @methodOf lbServices.Dapp
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/dapps",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapp#upsert
             * @methodOf lbServices.Dapp
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/dapps",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapp#replaceOrCreate
             * @methodOf lbServices.Dapp
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/dapps/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapp#upsertWithWhere
             * @methodOf lbServices.Dapp
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/dapps/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapp#exists
             * @methodOf lbServices.Dapp
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
              url: urlBase + "/dapps/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapp#findById
             * @methodOf lbServices.Dapp
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/dapps/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapp#replaceById
             * @methodOf lbServices.Dapp
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/dapps/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapp#find
             * @methodOf lbServices.Dapp
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/dapps",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapp#findOne
             * @methodOf lbServices.Dapp
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/dapps/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapp#updateAll
             * @methodOf lbServices.Dapp
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
              url: urlBase + "/dapps/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapp#deleteById
             * @methodOf lbServices.Dapp
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/dapps/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapp#count
             * @methodOf lbServices.Dapp
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
              url: urlBase + "/dapps/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapp#prototype$updateAttributes
             * @methodOf lbServices.Dapp
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/dapps/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dapp#createChangeStream
             * @methodOf lbServices.Dapp
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
              url: urlBase + "/dapps/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Favorite.dapps() instead.
            "::get::Favorite::dapps": {
              url: urlBase + "/favorites/:id/dapps",
              method: "GET",
            },

            // INTERNAL. Use Like.dapps() instead.
            "::get::Like::dapps": {
              url: urlBase + "/likes/:id/dapps",
              method: "GET",
            },

            // INTERNAL. Use DappTeamMember.dapp() instead.
            "::get::DappTeamMember::dapp": {
              url: urlBase + "/dappTeamMembers/:id/dapp",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Dapp#patchOrCreate
             * @methodOf lbServices.Dapp
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Dapp#updateOrCreate
             * @methodOf lbServices.Dapp
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Dapp#patchOrCreateWithWhere
             * @methodOf lbServices.Dapp
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Dapp#update
             * @methodOf lbServices.Dapp
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
             * @name lbServices.Dapp#destroyById
             * @methodOf lbServices.Dapp
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Dapp#removeById
             * @methodOf lbServices.Dapp
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Dapp#patchAttributes
             * @methodOf lbServices.Dapp
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Dapp#modelName
        * @propertyOf lbServices.Dapp
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Dapp`.
        */
        R.modelName = "Dapp";

    /**
     * @ngdoc object
     * @name lbServices.Dapp.comments
     * @header lbServices.Dapp.comments
     * @object
     * @description
     *
     * The object `Dapp.comments` groups methods
     * manipulating `Comment` instances related to `Dapp`.
     *
     * Call {@link lbServices.Dapp#comments Dapp.comments()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Dapp#comments
             * @methodOf lbServices.Dapp
             *
             * @description
             *
             * Queries comments of dapp.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
        R.comments = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::get::Dapp::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.comments#count
             * @methodOf lbServices.Dapp.comments
             *
             * @description
             *
             * Counts comments of dapp.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::count::Dapp::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.comments#create
             * @methodOf lbServices.Dapp.comments
             *
             * @description
             *
             * Creates a new instance in comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
        R.comments.create = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::create::Dapp::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.comments#createMany
             * @methodOf lbServices.Dapp.comments
             *
             * @description
             *
             * Creates a new instance in comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
        R.comments.createMany = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::createMany::Dapp::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.comments#destroyAll
             * @methodOf lbServices.Dapp.comments
             *
             * @description
             *
             * Deletes all comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::delete::Dapp::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.comments#destroyById
             * @methodOf lbServices.Dapp.comments
             *
             * @description
             *
             * Delete a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::destroyById::Dapp::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.comments#findById
             * @methodOf lbServices.Dapp.comments
             *
             * @description
             *
             * Find a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
        R.comments.findById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::findById::Dapp::comments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.comments#updateById
             * @methodOf lbServices.Dapp.comments
             *
             * @description
             *
             * Update a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::updateById::Dapp::comments"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Dapp.favorites
     * @header lbServices.Dapp.favorites
     * @object
     * @description
     *
     * The object `Dapp.favorites` groups methods
     * manipulating `Favorite` instances related to `Dapp`.
     *
     * Call {@link lbServices.Dapp#favorites Dapp.favorites()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Dapp#favorites
             * @methodOf lbServices.Dapp
             *
             * @description
             *
             * Queries favorites of dapp.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
        R.favorites = function() {
          var TargetResource = $injector.get("Favorite");
          var action = TargetResource["::get::Dapp::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.favorites#count
             * @methodOf lbServices.Dapp.favorites
             *
             * @description
             *
             * Counts favorites of dapp.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
          var TargetResource = $injector.get("Favorite");
          var action = TargetResource["::count::Dapp::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.favorites#create
             * @methodOf lbServices.Dapp.favorites
             *
             * @description
             *
             * Creates a new instance in favorites of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
        R.favorites.create = function() {
          var TargetResource = $injector.get("Favorite");
          var action = TargetResource["::create::Dapp::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.favorites#createMany
             * @methodOf lbServices.Dapp.favorites
             *
             * @description
             *
             * Creates a new instance in favorites of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
        R.favorites.createMany = function() {
          var TargetResource = $injector.get("Favorite");
          var action = TargetResource["::createMany::Dapp::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.favorites#destroyAll
             * @methodOf lbServices.Dapp.favorites
             *
             * @description
             *
             * Deletes all favorites of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
          var TargetResource = $injector.get("Favorite");
          var action = TargetResource["::delete::Dapp::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.favorites#destroyById
             * @methodOf lbServices.Dapp.favorites
             *
             * @description
             *
             * Delete a related item by id for favorites.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
          var TargetResource = $injector.get("Favorite");
          var action = TargetResource["::destroyById::Dapp::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.favorites#findById
             * @methodOf lbServices.Dapp.favorites
             *
             * @description
             *
             * Find a related item by id for favorites.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
        R.favorites.findById = function() {
          var TargetResource = $injector.get("Favorite");
          var action = TargetResource["::findById::Dapp::favorites"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.favorites#updateById
             * @methodOf lbServices.Dapp.favorites
             *
             * @description
             *
             * Update a related item by id for favorites.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
        R.favorites.updateById = function() {
          var TargetResource = $injector.get("Favorite");
          var action = TargetResource["::updateById::Dapp::favorites"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Dapp.likes
     * @header lbServices.Dapp.likes
     * @object
     * @description
     *
     * The object `Dapp.likes` groups methods
     * manipulating `Like` instances related to `Dapp`.
     *
     * Call {@link lbServices.Dapp#likes Dapp.likes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Dapp#likes
             * @methodOf lbServices.Dapp
             *
             * @description
             *
             * Queries likes of dapp.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
        R.likes = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::get::Dapp::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.likes#count
             * @methodOf lbServices.Dapp.likes
             *
             * @description
             *
             * Counts likes of dapp.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::count::Dapp::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.likes#create
             * @methodOf lbServices.Dapp.likes
             *
             * @description
             *
             * Creates a new instance in likes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
        R.likes.create = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::create::Dapp::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.likes#createMany
             * @methodOf lbServices.Dapp.likes
             *
             * @description
             *
             * Creates a new instance in likes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
        R.likes.createMany = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::createMany::Dapp::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.likes#destroyAll
             * @methodOf lbServices.Dapp.likes
             *
             * @description
             *
             * Deletes all likes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::delete::Dapp::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.likes#destroyById
             * @methodOf lbServices.Dapp.likes
             *
             * @description
             *
             * Delete a related item by id for likes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::destroyById::Dapp::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.likes#findById
             * @methodOf lbServices.Dapp.likes
             *
             * @description
             *
             * Find a related item by id for likes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
        R.likes.findById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::findById::Dapp::likes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.likes#updateById
             * @methodOf lbServices.Dapp.likes
             *
             * @description
             *
             * Update a related item by id for likes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
        R.likes.updateById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::updateById::Dapp::likes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Dapp.teamMembers
     * @header lbServices.Dapp.teamMembers
     * @object
     * @description
     *
     * The object `Dapp.teamMembers` groups methods
     * manipulating `DappStackUser` instances related to `Dapp`.
     *
     * Call {@link lbServices.Dapp#teamMembers Dapp.teamMembers()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Dapp#teamMembers
             * @methodOf lbServices.Dapp
             *
             * @description
             *
             * Queries teamMembers of dapp.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
        R.teamMembers = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::get::Dapp::teamMembers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.teamMembers#count
             * @methodOf lbServices.Dapp.teamMembers
             *
             * @description
             *
             * Counts teamMembers of dapp.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
        R.teamMembers.count = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::count::Dapp::teamMembers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.teamMembers#create
             * @methodOf lbServices.Dapp.teamMembers
             *
             * @description
             *
             * Creates a new instance in teamMembers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
        R.teamMembers.create = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::create::Dapp::teamMembers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.teamMembers#createMany
             * @methodOf lbServices.Dapp.teamMembers
             *
             * @description
             *
             * Creates a new instance in teamMembers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
        R.teamMembers.createMany = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::createMany::Dapp::teamMembers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.teamMembers#destroyAll
             * @methodOf lbServices.Dapp.teamMembers
             *
             * @description
             *
             * Deletes all teamMembers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
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
        R.teamMembers.destroyAll = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::delete::Dapp::teamMembers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.teamMembers#destroyById
             * @methodOf lbServices.Dapp.teamMembers
             *
             * @description
             *
             * Delete a related item by id for teamMembers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
             *
             *  - `fk` – `{*}` - Foreign key for teamMembers
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
        R.teamMembers.destroyById = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::destroyById::Dapp::teamMembers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.teamMembers#exists
             * @methodOf lbServices.Dapp.teamMembers
             *
             * @description
             *
             * Check the existence of teamMembers relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
             *
             *  - `fk` – `{*}` - Foreign key for teamMembers
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
        R.teamMembers.exists = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::exists::Dapp::teamMembers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.teamMembers#findById
             * @methodOf lbServices.Dapp.teamMembers
             *
             * @description
             *
             * Find a related item by id for teamMembers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
             *
             *  - `fk` – `{*}` - Foreign key for teamMembers
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
        R.teamMembers.findById = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::findById::Dapp::teamMembers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.teamMembers#link
             * @methodOf lbServices.Dapp.teamMembers
             *
             * @description
             *
             * Add a related item by id for teamMembers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
             *
             *  - `fk` – `{*}` - Foreign key for teamMembers
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
        R.teamMembers.link = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::link::Dapp::teamMembers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.teamMembers#unlink
             * @methodOf lbServices.Dapp.teamMembers
             *
             * @description
             *
             * Remove the teamMembers relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
             *
             *  - `fk` – `{*}` - Foreign key for teamMembers
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
        R.teamMembers.unlink = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::unlink::Dapp::teamMembers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dapp.teamMembers#updateById
             * @methodOf lbServices.Dapp.teamMembers
             *
             * @description
             *
             * Update a related item by id for teamMembers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dapp id
             *
             *  - `fk` – `{*}` - Foreign key for teamMembers
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
        R.teamMembers.updateById = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::updateById::Dapp::teamMembers"];
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
        urlBase + "/dappStackUsers/:id",
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
             *  - `id` – `{*}` - dappStackUser id
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
              url: urlBase + "/dappStackUsers/:id/accessTokens/:fk",
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
             *  - `id` – `{*}` - dappStackUser id
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
              url: urlBase + "/dappStackUsers/:id/accessTokens/:fk",
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
             *  - `id` – `{*}` - dappStackUser id
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
              url: urlBase + "/dappStackUsers/:id/accessTokens/:fk",
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
             *  - `id` – `{*}` - dappStackUser id
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
              url: urlBase + "/dappStackUsers/:id/roles/:fk",
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
             *  - `id` – `{*}` - dappStackUser id
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
              url: urlBase + "/dappStackUsers/:id/roles/:fk",
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
             *  - `id` – `{*}` - dappStackUser id
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
              url: urlBase + "/dappStackUsers/:id/roles/:fk",
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
             *  - `id` – `{*}` - dappStackUser id
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
              url: urlBase + "/dappStackUsers/:id/roles/rel/:fk",
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
             *  - `id` – `{*}` - dappStackUser id
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
              url: urlBase + "/dappStackUsers/:id/roles/rel/:fk",
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
             *  - `id` – `{*}` - dappStackUser id
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
              url: urlBase + "/dappStackUsers/:id/roles/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use DappStackUser.comments.findById() instead.
            "prototype$__findById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dappStackUsers/:id/comments/:fk",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.comments.destroyById() instead.
            "prototype$__destroyById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dappStackUsers/:id/comments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.comments.updateById() instead.
            "prototype$__updateById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dappStackUsers/:id/comments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use DappStackUser.favorites.findById() instead.
            "prototype$__findById__favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dappStackUsers/:id/favorites/:fk",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.favorites.destroyById() instead.
            "prototype$__destroyById__favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dappStackUsers/:id/favorites/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.favorites.updateById() instead.
            "prototype$__updateById__favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dappStackUsers/:id/favorites/:fk",
              method: "PUT",
            },

            // INTERNAL. Use DappStackUser.likes.findById() instead.
            "prototype$__findById__likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dappStackUsers/:id/likes/:fk",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.likes.destroyById() instead.
            "prototype$__destroyById__likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dappStackUsers/:id/likes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.likes.updateById() instead.
            "prototype$__updateById__likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dappStackUsers/:id/likes/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__get__accessTokens
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Queries accessTokens of dappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dappStackUser id
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
              url: urlBase + "/dappStackUsers/:id/accessTokens",
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
             *  - `id` – `{*}` - dappStackUser id
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
              url: urlBase + "/dappStackUsers/:id/accessTokens",
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
             *  - `id` – `{*}` - dappStackUser id
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
              url: urlBase + "/dappStackUsers/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__count__accessTokens
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Counts accessTokens of dappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dappStackUser id
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
              url: urlBase + "/dappStackUsers/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__get__roles
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Queries roles of dappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dappStackUser id
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
              url: urlBase + "/dappStackUsers/:id/roles",
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
             *  - `id` – `{*}` - dappStackUser id
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
              url: urlBase + "/dappStackUsers/:id/roles",
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
             *  - `id` – `{*}` - dappStackUser id
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
              url: urlBase + "/dappStackUsers/:id/roles",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappStackUser#prototype$__count__roles
             * @methodOf lbServices.DappStackUser
             *
             * @description
             *
             * Counts roles of dappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dappStackUser id
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
              url: urlBase + "/dappStackUsers/:id/roles/count",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.comments() instead.
            "prototype$__get__comments": {
              isArray: true,
              url: urlBase + "/dappStackUsers/:id/comments",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.comments.create() instead.
            "prototype$__create__comments": {
              url: urlBase + "/dappStackUsers/:id/comments",
              method: "POST",
            },

            // INTERNAL. Use DappStackUser.comments.destroyAll() instead.
            "prototype$__delete__comments": {
              url: urlBase + "/dappStackUsers/:id/comments",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.comments.count() instead.
            "prototype$__count__comments": {
              url: urlBase + "/dappStackUsers/:id/comments/count",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.favorites() instead.
            "prototype$__get__favorites": {
              isArray: true,
              url: urlBase + "/dappStackUsers/:id/favorites",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.favorites.create() instead.
            "prototype$__create__favorites": {
              url: urlBase + "/dappStackUsers/:id/favorites",
              method: "POST",
            },

            // INTERNAL. Use DappStackUser.favorites.destroyAll() instead.
            "prototype$__delete__favorites": {
              url: urlBase + "/dappStackUsers/:id/favorites",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.favorites.count() instead.
            "prototype$__count__favorites": {
              url: urlBase + "/dappStackUsers/:id/favorites/count",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.likes() instead.
            "prototype$__get__likes": {
              isArray: true,
              url: urlBase + "/dappStackUsers/:id/likes",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.likes.create() instead.
            "prototype$__create__likes": {
              url: urlBase + "/dappStackUsers/:id/likes",
              method: "POST",
            },

            // INTERNAL. Use DappStackUser.likes.destroyAll() instead.
            "prototype$__delete__likes": {
              url: urlBase + "/dappStackUsers/:id/likes",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.likes.count() instead.
            "prototype$__count__likes": {
              url: urlBase + "/dappStackUsers/:id/likes/count",
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
              url: urlBase + "/dappStackUsers",
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
              url: urlBase + "/dappStackUsers",
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
              url: urlBase + "/dappStackUsers",
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
              url: urlBase + "/dappStackUsers/replaceOrCreate",
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
              url: urlBase + "/dappStackUsers/upsertWithWhere",
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
              url: urlBase + "/dappStackUsers/:id/exists",
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
              url: urlBase + "/dappStackUsers/:id",
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
              url: urlBase + "/dappStackUsers/:id/replace",
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
              url: urlBase + "/dappStackUsers",
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
              url: urlBase + "/dappStackUsers/findOne",
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
              url: urlBase + "/dappStackUsers/update",
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
              url: urlBase + "/dappStackUsers/:id",
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
              url: urlBase + "/dappStackUsers/count",
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
             *  - `id` – `{*}` - dappStackUser id
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
              url: urlBase + "/dappStackUsers/:id",
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
              url: urlBase + "/dappStackUsers/change-stream",
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
              url: urlBase + "/dappStackUsers/login",
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
              url: urlBase + "/dappStackUsers/logout",
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
              url: urlBase + "/dappStackUsers/confirm",
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
              url: urlBase + "/dappStackUsers/reset",
              method: "POST",
            },

            // INTERNAL. Use Dapp.teamMembers.findById() instead.
            "::findById::Dapp::teamMembers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/teamMembers/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dapp.teamMembers.destroyById() instead.
            "::destroyById::Dapp::teamMembers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/teamMembers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dapp.teamMembers.updateById() instead.
            "::updateById::Dapp::teamMembers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/teamMembers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dapp.teamMembers.link() instead.
            "::link::Dapp::teamMembers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/teamMembers/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dapp.teamMembers.unlink() instead.
            "::unlink::Dapp::teamMembers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/teamMembers/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dapp.teamMembers.exists() instead.
            "::exists::Dapp::teamMembers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/teamMembers/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Dapp.teamMembers() instead.
            "::get::Dapp::teamMembers": {
              isArray: true,
              url: urlBase + "/dapps/:id/teamMembers",
              method: "GET",
            },

            // INTERNAL. Use Dapp.teamMembers.create() instead.
            "::create::Dapp::teamMembers": {
              url: urlBase + "/dapps/:id/teamMembers",
              method: "POST",
            },

            // INTERNAL. Use Dapp.teamMembers.createMany() instead.
            "::createMany::Dapp::teamMembers": {
              isArray: true,
              url: urlBase + "/dapps/:id/teamMembers",
              method: "POST",
            },

            // INTERNAL. Use Dapp.teamMembers.destroyAll() instead.
            "::delete::Dapp::teamMembers": {
              url: urlBase + "/dapps/:id/teamMembers",
              method: "DELETE",
            },

            // INTERNAL. Use Dapp.teamMembers.count() instead.
            "::count::Dapp::teamMembers": {
              url: urlBase + "/dapps/:id/teamMembers/count",
              method: "GET",
            },

            // INTERNAL. Use Favorite.dappStackUsers() instead.
            "::get::Favorite::dappStackUsers": {
              url: urlBase + "/favorites/:id/dappStackUsers",
              method: "GET",
            },

            // INTERNAL. Use Like.dappStackUsers() instead.
            "::get::Like::dappStackUsers": {
              url: urlBase + "/likes/:id/dappStackUsers",
              method: "GET",
            },

            // INTERNAL. Use DappTeamMember.dappStackUser() instead.
            "::get::DappTeamMember::dappStackUser": {
              url: urlBase + "/dappTeamMembers/:id/dappStackUser",
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
              url: urlBase + "/dappStackUsers" + '/:id',
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
             *  - `id` – `{*}` - dappStackUser id
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
     * manipulating `Comment` instances related to `DappStackUser`.
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
             * Queries comments of dappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dappStackUser id
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
        R.comments = function() {
          var TargetResource = $injector.get("Comment");
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
             * Counts comments of dappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dappStackUser id
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
          var TargetResource = $injector.get("Comment");
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
             *  - `id` – `{*}` - dappStackUser id
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
        R.comments.create = function() {
          var TargetResource = $injector.get("Comment");
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
             *  - `id` – `{*}` - dappStackUser id
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
        R.comments.createMany = function() {
          var TargetResource = $injector.get("Comment");
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
             *  - `id` – `{*}` - dappStackUser id
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
          var TargetResource = $injector.get("Comment");
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
             *  - `id` – `{*}` - dappStackUser id
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
          var TargetResource = $injector.get("Comment");
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
             *  - `id` – `{*}` - dappStackUser id
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
        R.comments.findById = function() {
          var TargetResource = $injector.get("Comment");
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
             *  - `id` – `{*}` - dappStackUser id
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("Comment");
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
     * manipulating `Favorite` instances related to `DappStackUser`.
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
             * Queries favorites of dappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dappStackUser id
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
        R.favorites = function() {
          var TargetResource = $injector.get("Favorite");
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
             * Counts favorites of dappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dappStackUser id
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
          var TargetResource = $injector.get("Favorite");
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
             *  - `id` – `{*}` - dappStackUser id
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
        R.favorites.create = function() {
          var TargetResource = $injector.get("Favorite");
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
             *  - `id` – `{*}` - dappStackUser id
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
        R.favorites.createMany = function() {
          var TargetResource = $injector.get("Favorite");
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
             *  - `id` – `{*}` - dappStackUser id
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
          var TargetResource = $injector.get("Favorite");
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
             *  - `id` – `{*}` - dappStackUser id
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
          var TargetResource = $injector.get("Favorite");
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
             *  - `id` – `{*}` - dappStackUser id
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
        R.favorites.findById = function() {
          var TargetResource = $injector.get("Favorite");
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
             *  - `id` – `{*}` - dappStackUser id
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
        R.favorites.updateById = function() {
          var TargetResource = $injector.get("Favorite");
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
     * manipulating `Like` instances related to `DappStackUser`.
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
             * Queries likes of dappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dappStackUser id
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
        R.likes = function() {
          var TargetResource = $injector.get("Like");
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
             * Counts likes of dappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dappStackUser id
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
          var TargetResource = $injector.get("Like");
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
             *  - `id` – `{*}` - dappStackUser id
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
        R.likes.create = function() {
          var TargetResource = $injector.get("Like");
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
             *  - `id` – `{*}` - dappStackUser id
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
        R.likes.createMany = function() {
          var TargetResource = $injector.get("Like");
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
             *  - `id` – `{*}` - dappStackUser id
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
          var TargetResource = $injector.get("Like");
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
             *  - `id` – `{*}` - dappStackUser id
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
          var TargetResource = $injector.get("Like");
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
             *  - `id` – `{*}` - dappStackUser id
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
        R.likes.findById = function() {
          var TargetResource = $injector.get("Like");
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
             *  - `id` – `{*}` - dappStackUser id
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
        R.likes.updateById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::updateById::DappStackUser::likes"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Comment
 * @header lbServices.Comment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Comment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Comment",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/comments/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Comment#create
             * @methodOf lbServices.Comment
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/comments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comment#createMany
             * @methodOf lbServices.Comment
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/comments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comment#upsert
             * @methodOf lbServices.Comment
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/comments",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comment#replaceOrCreate
             * @methodOf lbServices.Comment
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/comments/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comment#upsertWithWhere
             * @methodOf lbServices.Comment
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/comments/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comment#exists
             * @methodOf lbServices.Comment
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
              url: urlBase + "/comments/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comment#findById
             * @methodOf lbServices.Comment
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/comments/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comment#replaceById
             * @methodOf lbServices.Comment
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/comments/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comment#find
             * @methodOf lbServices.Comment
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/comments",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comment#findOne
             * @methodOf lbServices.Comment
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/comments/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comment#updateAll
             * @methodOf lbServices.Comment
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
              url: urlBase + "/comments/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comment#deleteById
             * @methodOf lbServices.Comment
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/comments/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comment#count
             * @methodOf lbServices.Comment
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
              url: urlBase + "/comments/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comment#prototype$updateAttributes
             * @methodOf lbServices.Comment
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - comment id
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/comments/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Comment#createChangeStream
             * @methodOf lbServices.Comment
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
              url: urlBase + "/comments/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Dapp.comments.findById() instead.
            "::findById::Dapp::comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/comments/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dapp.comments.destroyById() instead.
            "::destroyById::Dapp::comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/comments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dapp.comments.updateById() instead.
            "::updateById::Dapp::comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/comments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dapp.comments() instead.
            "::get::Dapp::comments": {
              isArray: true,
              url: urlBase + "/dapps/:id/comments",
              method: "GET",
            },

            // INTERNAL. Use Dapp.comments.create() instead.
            "::create::Dapp::comments": {
              url: urlBase + "/dapps/:id/comments",
              method: "POST",
            },

            // INTERNAL. Use Dapp.comments.createMany() instead.
            "::createMany::Dapp::comments": {
              isArray: true,
              url: urlBase + "/dapps/:id/comments",
              method: "POST",
            },

            // INTERNAL. Use Dapp.comments.destroyAll() instead.
            "::delete::Dapp::comments": {
              url: urlBase + "/dapps/:id/comments",
              method: "DELETE",
            },

            // INTERNAL. Use Dapp.comments.count() instead.
            "::count::Dapp::comments": {
              url: urlBase + "/dapps/:id/comments/count",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.comments.findById() instead.
            "::findById::DappStackUser::comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dappStackUsers/:id/comments/:fk",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.comments.destroyById() instead.
            "::destroyById::DappStackUser::comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dappStackUsers/:id/comments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.comments.updateById() instead.
            "::updateById::DappStackUser::comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dappStackUsers/:id/comments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use DappStackUser.comments() instead.
            "::get::DappStackUser::comments": {
              isArray: true,
              url: urlBase + "/dappStackUsers/:id/comments",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.comments.create() instead.
            "::create::DappStackUser::comments": {
              url: urlBase + "/dappStackUsers/:id/comments",
              method: "POST",
            },

            // INTERNAL. Use DappStackUser.comments.createMany() instead.
            "::createMany::DappStackUser::comments": {
              isArray: true,
              url: urlBase + "/dappStackUsers/:id/comments",
              method: "POST",
            },

            // INTERNAL. Use DappStackUser.comments.destroyAll() instead.
            "::delete::DappStackUser::comments": {
              url: urlBase + "/dappStackUsers/:id/comments",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.comments.count() instead.
            "::count::DappStackUser::comments": {
              url: urlBase + "/dappStackUsers/:id/comments/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Comment#patchOrCreate
             * @methodOf lbServices.Comment
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Comment#updateOrCreate
             * @methodOf lbServices.Comment
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Comment#patchOrCreateWithWhere
             * @methodOf lbServices.Comment
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Comment#update
             * @methodOf lbServices.Comment
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
             * @name lbServices.Comment#destroyById
             * @methodOf lbServices.Comment
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Comment#removeById
             * @methodOf lbServices.Comment
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Comment#patchAttributes
             * @methodOf lbServices.Comment
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - comment id
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
             * This usually means the response is a `Comment` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Comment#modelName
        * @propertyOf lbServices.Comment
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Comment`.
        */
        R.modelName = "Comment";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Favorite
 * @header lbServices.Favorite
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Favorite` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Favorite",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/favorites/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Favorite.dappStackUsers() instead.
            "prototype$__get__dappStackUsers": {
              url: urlBase + "/favorites/:id/dappStackUsers",
              method: "GET",
            },

            // INTERNAL. Use Favorite.dapps() instead.
            "prototype$__get__dapps": {
              url: urlBase + "/favorites/:id/dapps",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorite#create
             * @methodOf lbServices.Favorite
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/favorites",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorite#createMany
             * @methodOf lbServices.Favorite
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/favorites",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorite#upsert
             * @methodOf lbServices.Favorite
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/favorites",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorite#replaceOrCreate
             * @methodOf lbServices.Favorite
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/favorites/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorite#upsertWithWhere
             * @methodOf lbServices.Favorite
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/favorites/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorite#exists
             * @methodOf lbServices.Favorite
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
              url: urlBase + "/favorites/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorite#findById
             * @methodOf lbServices.Favorite
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/favorites/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorite#replaceById
             * @methodOf lbServices.Favorite
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/favorites/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorite#find
             * @methodOf lbServices.Favorite
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/favorites",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorite#findOne
             * @methodOf lbServices.Favorite
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/favorites/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorite#updateAll
             * @methodOf lbServices.Favorite
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
              url: urlBase + "/favorites/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorite#deleteById
             * @methodOf lbServices.Favorite
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/favorites/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorite#count
             * @methodOf lbServices.Favorite
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
              url: urlBase + "/favorites/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorite#prototype$updateAttributes
             * @methodOf lbServices.Favorite
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - favorite id
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/favorites/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Favorite#createChangeStream
             * @methodOf lbServices.Favorite
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
              url: urlBase + "/favorites/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Dapp.favorites.findById() instead.
            "::findById::Dapp::favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/favorites/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dapp.favorites.destroyById() instead.
            "::destroyById::Dapp::favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/favorites/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dapp.favorites.updateById() instead.
            "::updateById::Dapp::favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/favorites/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dapp.favorites() instead.
            "::get::Dapp::favorites": {
              isArray: true,
              url: urlBase + "/dapps/:id/favorites",
              method: "GET",
            },

            // INTERNAL. Use Dapp.favorites.create() instead.
            "::create::Dapp::favorites": {
              url: urlBase + "/dapps/:id/favorites",
              method: "POST",
            },

            // INTERNAL. Use Dapp.favorites.createMany() instead.
            "::createMany::Dapp::favorites": {
              isArray: true,
              url: urlBase + "/dapps/:id/favorites",
              method: "POST",
            },

            // INTERNAL. Use Dapp.favorites.destroyAll() instead.
            "::delete::Dapp::favorites": {
              url: urlBase + "/dapps/:id/favorites",
              method: "DELETE",
            },

            // INTERNAL. Use Dapp.favorites.count() instead.
            "::count::Dapp::favorites": {
              url: urlBase + "/dapps/:id/favorites/count",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.favorites.findById() instead.
            "::findById::DappStackUser::favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dappStackUsers/:id/favorites/:fk",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.favorites.destroyById() instead.
            "::destroyById::DappStackUser::favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dappStackUsers/:id/favorites/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.favorites.updateById() instead.
            "::updateById::DappStackUser::favorites": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dappStackUsers/:id/favorites/:fk",
              method: "PUT",
            },

            // INTERNAL. Use DappStackUser.favorites() instead.
            "::get::DappStackUser::favorites": {
              isArray: true,
              url: urlBase + "/dappStackUsers/:id/favorites",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.favorites.create() instead.
            "::create::DappStackUser::favorites": {
              url: urlBase + "/dappStackUsers/:id/favorites",
              method: "POST",
            },

            // INTERNAL. Use DappStackUser.favorites.createMany() instead.
            "::createMany::DappStackUser::favorites": {
              isArray: true,
              url: urlBase + "/dappStackUsers/:id/favorites",
              method: "POST",
            },

            // INTERNAL. Use DappStackUser.favorites.destroyAll() instead.
            "::delete::DappStackUser::favorites": {
              url: urlBase + "/dappStackUsers/:id/favorites",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.favorites.count() instead.
            "::count::DappStackUser::favorites": {
              url: urlBase + "/dappStackUsers/:id/favorites/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Favorite#patchOrCreate
             * @methodOf lbServices.Favorite
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Favorite#updateOrCreate
             * @methodOf lbServices.Favorite
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Favorite#patchOrCreateWithWhere
             * @methodOf lbServices.Favorite
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Favorite#update
             * @methodOf lbServices.Favorite
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
             * @name lbServices.Favorite#destroyById
             * @methodOf lbServices.Favorite
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Favorite#removeById
             * @methodOf lbServices.Favorite
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Favorite#patchAttributes
             * @methodOf lbServices.Favorite
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - favorite id
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
             * This usually means the response is a `Favorite` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Favorite#modelName
        * @propertyOf lbServices.Favorite
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Favorite`.
        */
        R.modelName = "Favorite";


            /**
             * @ngdoc method
             * @name lbServices.Favorite#dappStackUsers
             * @methodOf lbServices.Favorite
             *
             * @description
             *
             * Fetches belongsTo relation dappStackUsers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - favorite id
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
        R.dappStackUsers = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::get::Favorite::dappStackUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Favorite#dapps
             * @methodOf lbServices.Favorite
             *
             * @description
             *
             * Fetches belongsTo relation dapps.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - favorite id
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
        R.dapps = function() {
          var TargetResource = $injector.get("Dapp");
          var action = TargetResource["::get::Favorite::dapps"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Like
 * @header lbServices.Like
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Like` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Like",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/likes/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Like.dappStackUsers() instead.
            "prototype$__get__dappStackUsers": {
              url: urlBase + "/likes/:id/dappStackUsers",
              method: "GET",
            },

            // INTERNAL. Use Like.dapps() instead.
            "prototype$__get__dapps": {
              url: urlBase + "/likes/:id/dapps",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Like#create
             * @methodOf lbServices.Like
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/likes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Like#createMany
             * @methodOf lbServices.Like
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/likes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Like#upsert
             * @methodOf lbServices.Like
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/likes",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Like#replaceOrCreate
             * @methodOf lbServices.Like
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/likes/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Like#upsertWithWhere
             * @methodOf lbServices.Like
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/likes/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Like#exists
             * @methodOf lbServices.Like
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
              url: urlBase + "/likes/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Like#findById
             * @methodOf lbServices.Like
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/likes/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Like#replaceById
             * @methodOf lbServices.Like
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/likes/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Like#find
             * @methodOf lbServices.Like
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/likes",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Like#findOne
             * @methodOf lbServices.Like
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/likes/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Like#updateAll
             * @methodOf lbServices.Like
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
              url: urlBase + "/likes/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Like#deleteById
             * @methodOf lbServices.Like
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/likes/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Like#count
             * @methodOf lbServices.Like
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
              url: urlBase + "/likes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Like#prototype$updateAttributes
             * @methodOf lbServices.Like
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - like id
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/likes/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Like#createChangeStream
             * @methodOf lbServices.Like
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
              url: urlBase + "/likes/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Dapp.likes.findById() instead.
            "::findById::Dapp::likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/likes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dapp.likes.destroyById() instead.
            "::destroyById::Dapp::likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/likes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dapp.likes.updateById() instead.
            "::updateById::Dapp::likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dapps/:id/likes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dapp.likes() instead.
            "::get::Dapp::likes": {
              isArray: true,
              url: urlBase + "/dapps/:id/likes",
              method: "GET",
            },

            // INTERNAL. Use Dapp.likes.create() instead.
            "::create::Dapp::likes": {
              url: urlBase + "/dapps/:id/likes",
              method: "POST",
            },

            // INTERNAL. Use Dapp.likes.createMany() instead.
            "::createMany::Dapp::likes": {
              isArray: true,
              url: urlBase + "/dapps/:id/likes",
              method: "POST",
            },

            // INTERNAL. Use Dapp.likes.destroyAll() instead.
            "::delete::Dapp::likes": {
              url: urlBase + "/dapps/:id/likes",
              method: "DELETE",
            },

            // INTERNAL. Use Dapp.likes.count() instead.
            "::count::Dapp::likes": {
              url: urlBase + "/dapps/:id/likes/count",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.likes.findById() instead.
            "::findById::DappStackUser::likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dappStackUsers/:id/likes/:fk",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.likes.destroyById() instead.
            "::destroyById::DappStackUser::likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dappStackUsers/:id/likes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.likes.updateById() instead.
            "::updateById::DappStackUser::likes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/dappStackUsers/:id/likes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use DappStackUser.likes() instead.
            "::get::DappStackUser::likes": {
              isArray: true,
              url: urlBase + "/dappStackUsers/:id/likes",
              method: "GET",
            },

            // INTERNAL. Use DappStackUser.likes.create() instead.
            "::create::DappStackUser::likes": {
              url: urlBase + "/dappStackUsers/:id/likes",
              method: "POST",
            },

            // INTERNAL. Use DappStackUser.likes.createMany() instead.
            "::createMany::DappStackUser::likes": {
              isArray: true,
              url: urlBase + "/dappStackUsers/:id/likes",
              method: "POST",
            },

            // INTERNAL. Use DappStackUser.likes.destroyAll() instead.
            "::delete::DappStackUser::likes": {
              url: urlBase + "/dappStackUsers/:id/likes",
              method: "DELETE",
            },

            // INTERNAL. Use DappStackUser.likes.count() instead.
            "::count::DappStackUser::likes": {
              url: urlBase + "/dappStackUsers/:id/likes/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Like#patchOrCreate
             * @methodOf lbServices.Like
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Like#updateOrCreate
             * @methodOf lbServices.Like
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Like#patchOrCreateWithWhere
             * @methodOf lbServices.Like
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Like#update
             * @methodOf lbServices.Like
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
             * @name lbServices.Like#destroyById
             * @methodOf lbServices.Like
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Like#removeById
             * @methodOf lbServices.Like
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Like#patchAttributes
             * @methodOf lbServices.Like
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - like id
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
             * This usually means the response is a `Like` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Like#modelName
        * @propertyOf lbServices.Like
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Like`.
        */
        R.modelName = "Like";


            /**
             * @ngdoc method
             * @name lbServices.Like#dappStackUsers
             * @methodOf lbServices.Like
             *
             * @description
             *
             * Fetches belongsTo relation dappStackUsers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - like id
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
        R.dappStackUsers = function() {
          var TargetResource = $injector.get("DappStackUser");
          var action = TargetResource["::get::Like::dappStackUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Like#dapps
             * @methodOf lbServices.Like
             *
             * @description
             *
             * Fetches belongsTo relation dapps.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - like id
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
        R.dapps = function() {
          var TargetResource = $injector.get("Dapp");
          var action = TargetResource["::get::Like::dapps"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.DappTeamMember
 * @header lbServices.DappTeamMember
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `DappTeamMember` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "DappTeamMember",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/dappTeamMembers/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use DappTeamMember.dappStackUser() instead.
            "prototype$__get__dappStackUser": {
              url: urlBase + "/dappTeamMembers/:id/dappStackUser",
              method: "GET",
            },

            // INTERNAL. Use DappTeamMember.dapp() instead.
            "prototype$__get__dapp": {
              url: urlBase + "/dappTeamMembers/:id/dapp",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#create
             * @methodOf lbServices.DappTeamMember
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
             * This usually means the response is a `DappTeamMember` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/dappTeamMembers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#createMany
             * @methodOf lbServices.DappTeamMember
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
             * This usually means the response is a `DappTeamMember` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/dappTeamMembers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#upsert
             * @methodOf lbServices.DappTeamMember
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
             * This usually means the response is a `DappTeamMember` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/dappTeamMembers",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#replaceOrCreate
             * @methodOf lbServices.DappTeamMember
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
             * This usually means the response is a `DappTeamMember` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/dappTeamMembers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#upsertWithWhere
             * @methodOf lbServices.DappTeamMember
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
             * This usually means the response is a `DappTeamMember` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/dappTeamMembers/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#exists
             * @methodOf lbServices.DappTeamMember
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
              url: urlBase + "/dappTeamMembers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#findById
             * @methodOf lbServices.DappTeamMember
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
             * This usually means the response is a `DappTeamMember` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/dappTeamMembers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#replaceById
             * @methodOf lbServices.DappTeamMember
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
             * This usually means the response is a `DappTeamMember` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/dappTeamMembers/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#find
             * @methodOf lbServices.DappTeamMember
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
             * This usually means the response is a `DappTeamMember` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/dappTeamMembers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#findOne
             * @methodOf lbServices.DappTeamMember
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
             * This usually means the response is a `DappTeamMember` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/dappTeamMembers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#updateAll
             * @methodOf lbServices.DappTeamMember
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
              url: urlBase + "/dappTeamMembers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#deleteById
             * @methodOf lbServices.DappTeamMember
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
             * This usually means the response is a `DappTeamMember` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/dappTeamMembers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#count
             * @methodOf lbServices.DappTeamMember
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
              url: urlBase + "/dappTeamMembers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#prototype$updateAttributes
             * @methodOf lbServices.DappTeamMember
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dappTeamMember id
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
             * This usually means the response is a `DappTeamMember` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/dappTeamMembers/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#createChangeStream
             * @methodOf lbServices.DappTeamMember
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
              url: urlBase + "/dappTeamMembers/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#patchOrCreate
             * @methodOf lbServices.DappTeamMember
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
             * This usually means the response is a `DappTeamMember` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#updateOrCreate
             * @methodOf lbServices.DappTeamMember
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
             * This usually means the response is a `DappTeamMember` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#patchOrCreateWithWhere
             * @methodOf lbServices.DappTeamMember
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
             * This usually means the response is a `DappTeamMember` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#update
             * @methodOf lbServices.DappTeamMember
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
             * @name lbServices.DappTeamMember#destroyById
             * @methodOf lbServices.DappTeamMember
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
             * This usually means the response is a `DappTeamMember` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#removeById
             * @methodOf lbServices.DappTeamMember
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
             * This usually means the response is a `DappTeamMember` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#patchAttributes
             * @methodOf lbServices.DappTeamMember
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dappTeamMember id
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
             * This usually means the response is a `DappTeamMember` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.DappTeamMember#modelName
        * @propertyOf lbServices.DappTeamMember
        * @description
        * The name of the model represented by this $resource,
        * i.e. `DappTeamMember`.
        */
        R.modelName = "DappTeamMember";


            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#dappStackUser
             * @methodOf lbServices.DappTeamMember
             *
             * @description
             *
             * Fetches belongsTo relation dappStackUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dappTeamMember id
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
          var action = TargetResource["::get::DappTeamMember::dappStackUser"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.DappTeamMember#dapp
             * @methodOf lbServices.DappTeamMember
             *
             * @description
             *
             * Fetches belongsTo relation dapp.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - dappTeamMember id
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
             * This usually means the response is a `Dapp` object.)
             * </em>
             */
        R.dapp = function() {
          var TargetResource = $injector.get("Dapp");
          var action = TargetResource["::get::DappTeamMember::dapp"];
          return action.apply(R, arguments);
        };


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
