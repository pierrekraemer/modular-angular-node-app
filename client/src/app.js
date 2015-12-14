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
	$urlRouterProvider.otherwise("/en/");
	
	$locationProvider.html5Mode(true);
	
	$stateProvider
	.state('root', {
		abstract: true,
		url     : '/:lang',
		data    : {
			page_title: ''
		}
	});
	
	$translateProvider.useLoader('$translatePartialLoader', {
		urlTemplate: 'i18n/{part}/{lang}.json'
	});
	$translateProvider.preferredLanguage('en');
	$translateProvider.fallbackLanguage('en');
	$translateProvider.useSanitizeValueStrategy('escaped');
})

.run(function ($rootScope, $translate) {
	$rootScope.lang = 'en';

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
	
	var vm = this;
	
	$scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		data.title = toState.data.page_title + ' | ' + APP_NAME;
	});
	
	// public
	
	var data = {
		title: '',
		app_name: APP_NAME
	};
	
	function change_lang (lang) {
		$state.go('.', { lang : lang });
	}
	
	// exports
	
	angular.extend( vm, {
		data : data,
		change_lang : change_lang
	});
});
