'use strict';

const expressjwt = require('express-jwt');

exports = module.exports = (userModel, secret) => (
	{
		identifyUser: [
			// set req.user based on the content of the JSON Web Token
			expressjwt({ secret }),
			// update req.user to contain a DAO User instance
			(req, res, next) => {
				userModel
				.findById(req.user.id)
				.then((user) => {
					if (!user) {
						const err = new Error('Requested User not found');
						err.status = 404;
						return next(err);
					}
					req.user = user;
					return next();
				});
			}
		],
		userHasRole : (authorized) => {
			return (req, res, next) => {
				authorized.forEach((role) => {
					if (req.user.hasRole(role)) {
						return next();
					}
				});
				const err = new Error('You are not authorized to get this ressource');
				err.status = 403;
				return next(err);
			};
		}
	}
);

exports['@require'] = [
	'models/user',
	'config/secret'
];

exports['@singleton'] = true;
