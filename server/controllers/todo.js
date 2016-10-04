'use strict';

exports = module.exports = (todoModel) => (
	{
		getAll: (req, res, next) => {
			console.log('todo: getAll');
		},

		getById: (req, res, next) => {
			console.log('todo: getById');
		},

		create: (req, res, next) => {
			console.log('todo: create');
		},

		updateById: (req, res, next) => {
			console.log('todo: updateById');
		},

		deleteById: (req, res, next) => {
			console.log('todo: deleteById');
		}
	}
);

exports['@require'] = [
	'models/todo'
];

exports['@singleton'] = true;
