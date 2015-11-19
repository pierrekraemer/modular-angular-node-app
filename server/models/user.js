'use strict';

var
Sequelize = require('sequelize'),
bcrypt = require('bcrypt-nodejs');

var
db_,
User_,

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
		// User_.hasOne(models.OtherModel);
		// User_.belongsToMany(models.OtherModel);
	},
	generateHash: function (password) {
		return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
	},
	roles: function () {
		return {
			admin: 'admin',
			user: 'user'
		};
	}
},

instanceMethods_ = {
	validatePassword : function (password) {
		return bcrypt.compareSync(password, this.password);
	},
	hasRole : function (role) {
		return this.roles.indexOf(role) > -1;
	},
	addRole : function (role) {
		if (this.roles.indexOf(role) < 0) {
			this.roles.push(role);
		}
	}
};


exports = module.exports = function (db) {
	db_ = db;
	User_ = db.connection.define(
		name_,
		model_,
		{
            classMethods: classMethods_,
            instanceMethods : instanceMethods_
        }
	);
	// db.models[name_] = User_;
	
	return User_;
};

exports['@require'] = [
	'config/db'
];

exports['@singleton'] = true;
