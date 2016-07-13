import angular from 'angular';

import WeatherCityCardComponent from './weather-city-card.component';

const weatherCityCard = angular
.module('weatherCityCard', [])
.component('weatherCityCard', WeatherCityCardComponent)
.name;

export default weatherCityCard;
