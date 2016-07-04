import angular from 'angular';

import Nav from './nav';
import Footer from './footer';

const common = angular
.module('app.common', [
    Nav,
    Footer
])
.name;

export default common;
