import angular from 'angular';
import uiRouter from 'angular-ui-router';

import UserSigninComponent from './user-signin.component';
import UserService from './user.service';

const user = angular
.module('user', [
    uiRouter
])
.factory('UserService', UserService)
.component('userSignin', UserSigninComponent)
.config(($stateProvider) => {
    $stateProvider
    .state('app.signin', {
        url: '/signin',
        component: 'userSignin'
    })
	.state('app.signout', {
		url: '/signout',
		onEnter: function ($state, AuthService) {
			AuthService.signout()
			.then(() => {
				$state.go('app.home', {}, { reload: true });
			});
		}
	});
})
.name;

export default user;
