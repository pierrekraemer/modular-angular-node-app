'use strict';

const
Sequelize = require('sequelize'),
bcrypt = require('bcrypt-nodejs');

var
db_,
User_;

const
name_ = 'User',

model_ = {
	username: Sequelize.STRING,
	password: Sequelize.STRING,
	roles   : {
		type: Sequelize.STRING,
		get: function () {
			return this.getDataValue('roles').split(',');
		},
		set: function (value) {
			this.setDataValue('roles', value.join(','));
		}
	}
},

classMethods_ = {
	associate: function (models) {
		User_.hasMany(models.Todo);
		// User_.belongsToMany(models.OtherModel);
	},
	generateHash: (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null),
	roles: () => (
		{
			admin: 'admin',
			user: 'user'
		}
	)
},

instanceMethods_ = {
	validatePassword : function (password) {
		return bcrypt.compareSync(password, this.password);
	},
	hasRole : function (role) {
		return this.roles.includes(role);
	},
	addRole : function (role) {
		if (!this.roles.includes(role)) {
			this.roles.push(role);
		}
	}
};


exports = module.exports = (db) => {
	db_ = db;
	User_ = db.connection.define(
		name_,
		model_,
		{
            classMethods: classMethods_,
            instanceMethods : instanceMethods_
        }
	);

	return User_;
};

exports['@require'] = [
	'config/db'
];

exports['@singleton'] = true;
