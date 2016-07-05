'use strict';

const
fs = require('fs'),
ioc = require('electrolyte');

exports = module.exports = (() => {

	const routes = [];

	fs.readdirSync(__dirname)
	.forEach((filename) => {
		if (filename !== 'index.js') {
			const name = filename.replace(/\.[^/.]+$/, '');
			routes.push(ioc.create('routes/' + name));
		}
	});

	return routes;

})();
