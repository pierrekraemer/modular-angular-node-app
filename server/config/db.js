'use strict';

var Sequelize = require('sequelize');

var
_DBname = 'dbname',
_DBtype = 'mysql',
_DBuser = 'username',
_DBpw   = 'password',
_DBhost = 'localhost',
_DBport = 3306;

exports = module.exports = {
	connection: new Sequelize(_DBname, _DBuser, _DBpw, {
		host: _DBhost,
		port: _DBport,
		dialect: _DBtype
		// logging: false
	})
	
	// models : {
	// 	// populated by models on load
	// }
};

exports['@literal'] = true;
