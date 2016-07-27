import controller from './weather-city-card.controller';
import template from './weather-city-card.template.html';

const WeatherCityCardComponent = {
	controller,
	bindings: {
		city: '<',
		onRefresh: '&',
		onClose: '&'
	},
    template
};

export default WeatherCityCardComponent;
