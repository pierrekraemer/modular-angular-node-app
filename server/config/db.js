'use strict';

const Sequelize = require('sequelize');

const
_DBname = 'apptest',
_DBuser = 'apptest',
_DBpw   = 'apptest',
_DBhost = 'localhost',
_DBport = 3306,
_DBtype = 'mysql';

exports = module.exports = {
	connection: new Sequelize(_DBname, _DBuser, _DBpw, {
		host: _DBhost,
		port: _DBport,
		dialect: _DBtype
		// logging: false
	})
};

exports['@literal'] = true;
