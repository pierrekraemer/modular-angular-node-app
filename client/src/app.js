'use strict';

var angular = require('angular');

var deps = [
	require('angular-ui-router'),
	require('angular-translate'),
	require('angular-translate-loader-partial')
];
var modules = require('./modules');

angular.module('App', deps.concat(modules))

.constant('APP_NAME', 'App')

.config(function ($urlRouterProvider, $locationProvider, $stateProvider, $translateProvider) {
	$urlRouterProvider.otherwise("/fr/");
	
	$locationProvider.html5Mode(true);
	
	$stateProvider
	.state('root', {
		abstract : true,
		url      : '/:lang',
		views    : {
			'root' : {
				template : '<div ui-view="main"></div>'
			}
		},
		data     : {
			pageTitle : ''
		}
	});
	
	$translateProvider.useLoader('$translatePartialLoader', {
		urlTemplate: 'i18n/{part}/{lang}.json'
	});
	$translateProvider.preferredLanguage('fr');
	$translateProvider.fallbackLanguage('fr');
	$translateProvider.useSanitizeValueStrategy('escaped');
})

.run(function ($rootScope, $translate) {
	$rootScope.lang = 'fr';

	$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		if (toParams.lang !== $rootScope.lang) {
			$translate.use(toParams.lang);
			$rootScope.lang = toParams.lang;	
		}
	});

	$rootScope.$on('$translatePartialLoaderStructureChanged', function () {
		$translate.refresh();
	});
})

.controller('MainCtrl', function ($scope, $state, APP_NAME) {
	// private
	
	$scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		data.title = toState.data.pageTitle + ' | ' + APP_NAME;
	});
	
	// public
	
	var data = {
		title : ''
	};
	
	function changeLang (lang) {
		$state.go('.', { lang : lang });
	}
	
	// exports
	
	angular.extend( $scope, {
		data : data,
		changeLang : changeLang
	});
});
