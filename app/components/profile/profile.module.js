'use strict'

require('./profile-favorites/profile-favorites.module');
require('./profile-settings/profile-settings.module');

module.exports = angular.module('dappstackApp.components.profile', [
    'dappstackApp.components.profile.profileFavorites',
    'dappstackApp.components.profile.profileSettings'
]).name;

var load = require.context('./', false, /^((?!\.spec\.(js|ts)).)*.(js|ts)$/);
load.keys().forEach(load);