'use strict';

var
fs = require('fs'),
ioc = require('electrolyte');

exports = module.exports = (function () {

	var models = [];
	
	fs.readdirSync(__dirname)
	.forEach(function (f) {
		if (f !== 'index.js') {
			var name = f.replace(/\.[^/.]+$/, '');
			models.push(ioc.create('models/'+name));
		}
	});
	
	return models;
	
}());
