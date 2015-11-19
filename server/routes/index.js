'use strict';

var
fs = require('fs'),
ioc = require('electrolyte');

exports = module.exports = (function () {

	var routes = [];
	
	fs.readdirSync(__dirname)
	.forEach(function (f) {
		if (f !== 'index.js') {
			var name = f.replace(/\.[^/.]+$/, '');
			routes.push(ioc.create('routes/'+name));
		}
	});
	
	return routes;
	
}());
