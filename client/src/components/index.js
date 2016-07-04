import angular from 'angular';

import Home from './home';

const components = angular
.module('app.components', [
    Home
])
.name;

export default components;
