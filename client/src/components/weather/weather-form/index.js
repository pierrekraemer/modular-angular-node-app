import angular from 'angular';

import WeatherFormComponent from './weather-form.component';

const weatherForm = angular
.module('weatherForm', [])
.component('weatherForm', WeatherFormComponent)
.name;

export default weatherForm;
