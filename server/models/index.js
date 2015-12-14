'use strict';

var
fs = require('fs'),
ioc = require('electrolyte');

exports = module.exports = (function () {

	var models = {};
	
	fs.readdirSync(__dirname)
	.forEach(function (f) {
		if (f !== 'index.js') {
			var name = f.replace(/\.[^/.]+$/, '');
			var model = ioc.create('models/'+name);
			models[model.name] = model;
		}
	});
	
	return models;
	
}());
