import angular from 'angular';
import uiRouter from 'angular-ui-router';

import HomeComponent from './home.component';

const home = angular
.module('home', [
    uiRouter
])

.component('home', HomeComponent)

.config(($stateProvider) => {
    $stateProvider
    .state('root.home', {
        url: 'home',
        component: 'home'
    });
})
.name;

export default home;
