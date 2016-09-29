import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import AppComponent from './app.component';

import common from './common';
import components from './components';

angular
.module('app', [
	common,
	components,
	uiRouter,
	ngAnimate
])

.component('app', AppComponent)

.run(($transitions) => {
	$transitions.onBefore(
		{ to: (state) => state.data && state.data.authRequired },
		(transition) => {
			const AuthService = transition.injector().get('AuthService');
			return AuthService.isSignedIn();
		}
	);
})

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
});
