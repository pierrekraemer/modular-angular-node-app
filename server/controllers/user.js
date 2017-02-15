'use strict';

const
jsonwebtoken = require('jsonwebtoken'),
secret = require('../config/secret'),
db = require('../models');

module.exports = {

	signin: (req, res, next) => {
		const username = req.body.username || '';
		const password = req.body.password || '';

		db.User.findOne({
			where: { username }
		})
		.then((user) => {
			if (!user) {
				const err = new Error('User not found');
				err.status = 404;
				throw err;
			}
			if (!user.validatePassword(password)) {
				const err = new Error('Wrong password');
				err.status = 401;
				throw err;
			}

			const user_without_password = {
				id: user.id,
				username: user.username,
				roles: user.roles
			};

			const token = jsonwebtoken.sign(
				{ id: user.id },
				secret,
				{ expiresIn: 60 * 60 * 12 }
			);

			return res.json({ user: user_without_password, token });
		})
		.catch((err) => next(err));
	},
	
	getByToken: (req, res, next) => {
		const user_without_password = {
			id: req.user.id,
			username: req.user.username,
			roles: req.user.roles
		};
		return res.json(user_without_password);
	}

};
