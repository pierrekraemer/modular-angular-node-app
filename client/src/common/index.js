import angular from 'angular';

import Nav from './nav';

const common = angular
.module('app.common', [
    Nav
])
.name;

export default common;
