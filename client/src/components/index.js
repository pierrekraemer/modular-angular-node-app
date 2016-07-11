import angular from 'angular';

import Home from './home';
import About from './about';
import User from './user';

const components = angular
.module('app.components', [
    Home,
    About,
    User
])
.name;

export default components;
