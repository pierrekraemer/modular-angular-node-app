import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import AppComponent from './app.component';

import Common from './common';
import Components from './components';

const root = angular
.module('app', [
	Common,
	Components,
	uiRouter,
	ngAnimate
])

.component('app', AppComponent)

.config(($httpProvider, $urlRouterProvider, $locationProvider) => {
	$httpProvider.interceptors.push('JWTInterceptor');
	$urlRouterProvider.otherwise("/");
	$locationProvider.html5Mode(true);
});
