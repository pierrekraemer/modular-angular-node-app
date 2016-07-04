import angular from 'angular';
import uiRouter from 'angular-ui-router';

import AppComponent from './app.component';
import Components from './components';
// import Common from './common';

const root = angular
.module('app', [
	Components,
	// Common,
	uiRouter
])

.component('app', AppComponent)

.config(($urlRouterProvider, $locationProvider, $stateProvider) => {
	$stateProvider
    .state('root', {
        url: '/',
        component: 'app'
    });

	$urlRouterProvider.otherwise("/");
	// $locationProvider.html5Mode(true);
});
