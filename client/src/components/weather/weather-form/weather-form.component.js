import controller from './weather-form.controller';
import template from './weather-form.template.html';

const WeatherFormComponent = {
	controller,
	bindings: {
		onAddCity: '&'
	},
    template
};

export default WeatherFormComponent;
