const WeatherCityCardController = function () {

	const newCity = {
		name: ''
	};

	const addCity = () => {
		this.onAddCity({
			data: newCity
		});
		newCity.name = '';
	};
	
	Object.assign(this, {
		newCity,
		addCity
	});

};

export default WeatherCityCardController;
