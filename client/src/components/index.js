import angular from 'angular';

import Home from './home';
import About from './about';
import User from './user';
import Weather from './weather';

const components = angular
.module('app.components', [
    Home,
    About,
    User,
	Weather
])
.name;

export default components;
