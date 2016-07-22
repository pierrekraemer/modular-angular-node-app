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
    .state('root.userSignin', {
        url: '/signin',
        component: 'userSignin'
    })
	.state('root.userSignout', {
		url: '/signout',
		template: '<h1>Signing out...</h1>',
		controller: (AuthService, $state) => {
			AuthService.signout();
			$state.go('root.home');
		}
	});
})
.name;

export default user;
