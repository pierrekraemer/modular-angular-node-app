import angular from 'angular';

import Auth from './auth';
import Nav from './nav';

const common = angular
.module('app.common', [
    Auth,
    Nav
])
.name;

export default common;
