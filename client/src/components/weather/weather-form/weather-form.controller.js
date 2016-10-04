const WeatherFormController = function () {
	
	const ctrl = this;

	ctrl.newCity = {
		name: ''
	};

	ctrl.addCity = () => {
		ctrl.onAddCity({
			data: ctrl.newCity
		});
		ctrl.newCity.name = '';
	};

};

export default WeatherFormController;
