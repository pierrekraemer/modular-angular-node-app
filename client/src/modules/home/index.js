'use strict';

var angular = require('angular');
var module_name = 'Home';

angular.module(module_name, [])

.config(function ($stateProvider, $translatePartialLoaderProvider) {
	
	$translatePartialLoaderProvider.addPart('home');

	$stateProvider
	.state('root.home', {
		url  : '/',
		views: {
			'main@' : {
				controller  : 'HomeCtrl',
				controllerAs: 'vm',
				templateUrl : 'partials/home/home.html'
			}
		},
		data : {
			page_title: 'Home'
		}
	});

});

require('./ctrl.js')(module_name, 'HomeCtrl');

module.exports = module_name;
