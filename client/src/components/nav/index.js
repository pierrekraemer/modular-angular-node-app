import angular from 'angular';
import collapse from 'angular-ui-bootstrap/src/collapse';
import dropdown from 'angular-ui-bootstrap/src/dropdown';

import NavComponent from './nav.component';

const nav = angular
.module('nav', [ collapse, dropdown ])
.component('appNav', NavComponent)
.name;

export default nav;
