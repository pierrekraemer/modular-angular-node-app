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
    .state('userSignin', {
        url: '/signin',
        component: 'userSignin'
    });
})
.name;

export default user;
