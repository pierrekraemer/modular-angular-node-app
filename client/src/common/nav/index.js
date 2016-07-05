import angular from 'angular';

import NavComponent from './nav.component';

const nav = angular
.module('nav', [])
.component('appNav', NavComponent)
.name;

export default nav;
