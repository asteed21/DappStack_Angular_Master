'use strict'

module.exports = angular.module('dappstackApp.components.profile.profileFavorites.profileFavorite', []).name;

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);