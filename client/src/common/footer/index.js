import angular from 'angular';

import FooterComponent from './footer.component';

const footer = angular
.module('footer', [])
.component('appFooter', FooterComponent)
.name;

export default footer;
