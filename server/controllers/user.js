'use strict';

exports = module.exports = function (userModel) {
	
	return {
		getAll : function (req, res, next) {
			console.log('user : getAll');
		},
		
		getById : function (req, res, next) {
			console.log('user : getById');
		},
		
		create : function (req, res, next) {
			console.log('user : create');
		},
		
		updateById : function (req, res, next) {
			console.log('user : updateById');
		},
	};
	
};

exports['@require'] = [
	'models/user'
];

exports['@singleton'] = true;
