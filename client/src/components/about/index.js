import angular from 'angular';
import uiRouter from 'angular-ui-router';

import AboutComponent from './about.component';

const about = angular
.module('about', [
    uiRouter
])
.component('about', AboutComponent)
.config(($stateProvider) => {
    $stateProvider
    .state('about', {
        url: '/about',
        component: 'about'
    });
})
.name;

export default about;
