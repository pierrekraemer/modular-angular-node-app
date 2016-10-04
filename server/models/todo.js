'use strict';

const
Sequelize = require('sequelize');

var
db_,
Todo_;

const
name_ = 'Todo',

model_ = {
	text: { type: Sequelize.STRING },
	done: { type: Sequelize.BOOLEAN, defaultValue: false }
},

classMethods_ = {
	associate: function (models) {
        Todo_.belongsTo(models.User);
	}
},

instanceMethods_ = {};


exports = module.exports = (db) => {
	db_ = db;
	Todo_ = db.connection.define(
		name_,
		model_,
		{
            classMethods: classMethods_,
            instanceMethods : instanceMethods_
        }
	);

	return Todo_;
};

exports['@require'] = [
	'config/db'
];

exports['@singleton'] = true;
