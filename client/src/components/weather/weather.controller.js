const WeatherController = function (WeatherService) {
	
	const cities = [];
	
	const addCity = (city) => {
		WeatherService.getCityWeatherByName(city.name)
		.then((res) => {
			cities.push(res.data);
		});
	};
	
	const refreshCity = (index) => {
		WeatherService.getCityWeatherById(cities[index].id)
		.then((res) => {
			cities[index] = res.data;
		});
	};
	
	const refreshAll = () => {
		cities.forEach((city, index) => {
			WeatherService.getCityWeatherById(city.id)
			.then((res) => {
				cities[index] = res.data;
			});
		});
	};
	
	const removeCity = (index) => {
		cities.splice(index, 1);
	};
	
	Object.assign(this, {
		cities,
		addCity,
		refreshCity,
		refreshAll,
		removeCity
	});

};

export default WeatherController;
