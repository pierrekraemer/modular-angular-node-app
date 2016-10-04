import angular from 'angular';

import weatherForm from './weather-form';
import weatherCityCard from './weather-city-card';

import WeatherService from './weather.service';
import WeatherComponent from './weather.component';

const weather = angular
.module('weather', [
	weatherForm,
	weatherCityCard
])
.factory('WeatherService', WeatherService)
.component('weather', WeatherComponent)
.config(($stateProvider) => {
    $stateProvider
    .state('app.weather', {
        url: '/weather',
		data: {
			authRequired: true
		},
        component: 'weather'
    });
})
.name;

export default weather;
