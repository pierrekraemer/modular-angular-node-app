import angular from 'angular';
import uiRouter from 'angular-ui-router';

const user = angular
.module('user', [
    uiRouter
])
.factory(($http) => {
    return {

    };
})
.name;

export default user;
