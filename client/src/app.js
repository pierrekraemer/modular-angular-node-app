import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import AppComponent from './app.component';

import Components from './components';
import Common from './common';

const root = angular
.module('app', [
	Components,
	Common,
	uiRouter,
	ngAnimate
])

.component('app', AppComponent)

.config(($urlRouterProvider, $locationProvider, $stateProvider) => {
	$urlRouterProvider.otherwise("/");
	$locationProvider.html5Mode(true);
});
