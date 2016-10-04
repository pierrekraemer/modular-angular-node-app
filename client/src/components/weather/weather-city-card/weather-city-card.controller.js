const WeatherCityCardController = function () {
	
	const ctrl = this;

	ctrl.refresh = () => {
		ctrl.onRefresh();
	};
	
	ctrl.close = () => {
		ctrl.onClose();
	};
	
	ctrl.$onChanges = (changes) => {
		if (changes.city) {
			ctrl.city = Object.assign({}, ctrl.city);
		}
	};

};

export default WeatherCityCardController;
