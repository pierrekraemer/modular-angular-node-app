const WeatherController = function (WeatherService) {
	
	const ctrl = this;
	
	ctrl.cities = [];
	
	ctrl.addCity = (city) => {
		WeatherService.getCityWeatherByName(city.name)
		.then((res) => {
			ctrl.cities.push(res.data);
		});
	};
	
	ctrl.refreshCity = (index) => {
		WeatherService.getCityWeatherById(cities[index].id)
		.then((res) => {
			ctrl.cities[index] = res.data;
		});
	};
	
	ctrl.refreshAll = () => {
		ctrl.cities.forEach((city, index) => {
			WeatherService.getCityWeatherById(city.id)
			.then((res) => {
				ctrl.cities[index] = res.data;
			});
		});
	};
	
	ctrl.removeCity = (index) => {
		ctrl.cities.splice(index, 1);
	};

};

export default WeatherController;
