import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import common from './common';
import components from './components';

import AppComponent from './app.component';

angular
.module('app', [
	common,
	components,
	uiRouter,
	ngAnimate
])

.component('app', AppComponent)

.config(($httpProvider, $urlRouterProvider, $locationProvider, $stateProvider) => {
	$httpProvider.interceptors.push('JWTInterceptor');

	$urlRouterProvider.otherwise("/");
	$locationProvider.html5Mode(true);

	$stateProvider
	.state('app', {
		redirectTo: 'app.home',
		component: 'app',
		resolve: {
			user: (AuthService) => AuthService.user()
		}
    });
})

.run(($transitions) => {
	$transitions.onBefore(
		{ to: (state) => state.data && state.data.authRequired },
		(transition) => {
			const AuthService = transition.injector().get('AuthService');
			return AuthService.isSignedIn();
		}
	);
});
