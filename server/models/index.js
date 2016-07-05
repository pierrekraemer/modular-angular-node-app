'use strict';

const
fs = require('fs'),
ioc = require('electrolyte');

exports = module.exports = (() => {

	const models = {};

	fs.readdirSync(__dirname)
	.forEach((filename) => {
		if (filename !== 'index.js') {
			const name = filename.replace(/\.[^/.]+$/, '');
			const model = ioc.create('models/' + name);
			models[model.name] = model;
		}
	});

	return models;

})();
