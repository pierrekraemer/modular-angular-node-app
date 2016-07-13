const WeatherService = ($http) => ({

	getCityWeatherByName: (cityName) =>
		$http.get('http://api.openweathermap.org/data/2.5/weather?appid=8655dbf242aa1f005f358c18e785d948&mode=json&units=metric&q=' + cityName),
		
	getCityWeatherById: (cityId) =>
		$http.get('http://api.openweathermap.org/data/2.5/weather?appid=8655dbf242aa1f005f358c18e785d948&mode=json&units=metric&id=' + cityId)

});

export default WeatherService;
