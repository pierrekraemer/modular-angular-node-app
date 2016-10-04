import angular from 'angular';

import Auth from './auth';
import Nav from './nav';
import Home from './home';
import About from './about';
import User from './user';
import Todo from './todo';
import Weather from './weather';

const components = angular
.module('app.components', [
	Auth,
	Nav,
    Home,
    About,
    User,
	Todo,
	Weather
])
.name;

export default components;
