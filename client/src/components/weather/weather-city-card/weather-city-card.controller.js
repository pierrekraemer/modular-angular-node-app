const WeatherCityCardController = function () {

	const refresh = () => {
		this.onRefresh();
	};
	
	const close = () => {
		this.onClose();
	};
	
	this.$onChanges = (changes) => {
		if (changes.city) {
			this.city = Object.assign({}, this.city);
		}
	};
	
	Object.assign(this, {
		refresh,
		close
	});

};

export default WeatherCityCardController;
