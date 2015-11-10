'use strict';

var angular = require('angular');
var moduleName = 'Home';

angular.module(moduleName, [])

.config(function ($stateProvider, $translatePartialLoaderProvider) {
	
	$translatePartialLoaderProvider.addPart('home');

	$stateProvider
	.state('root.home', {
		url   : '/',
		views : {
			'main' : {
				controller  : require('./ctrl.js'),
				templateUrl : 'partials/home/home.html'
			}
		},
		data  : {
			pageTitle : 'Home'
		}
	});

});

module.exports = moduleName;
