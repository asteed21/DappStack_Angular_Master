'use strict'

require('./profile-favorite/profile-favorite.module');

module.exports = angular.module('dappstackApp.components.profile.profileFavorites', [
    'dappstackApp.components.profile.profileFavorites.profileFavorite'
]).name;

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);