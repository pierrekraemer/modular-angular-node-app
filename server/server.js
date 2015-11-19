'use strict';

var
express = require('express'),
ioc = require('electrolyte'),
bodyParser = require('body-parser'),
favicon = require('serve-favicon'),
path = require('path'),
_ = require('lodash');


var app = express();
app.disable('x-powered-by');


var publicPath = path.resolve('../client/public');

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.all('*', function (req, res, next) {
	res.set('Access-Control-Allow-Origin', 'http://localhost');
	res.set('Access-Control-Allow-Credentials', true);
	res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
	res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
	if (req.method === 'OPTIONS') {
		return res.send(200);
	} else {
		next();
	}
});


ioc.use('config', ioc.node('config/'));
ioc.use('models', ioc.node('models/'));
ioc.use('controllers', ioc.node('controllers/'));
ioc.use('services', ioc.node('services/'));
ioc.use('routes', ioc.node('routes/'));


var models = require('./models');
models.forEach(function (model) {
	model.associate(models);
});


var routers_data = require('./routes');
routers_data.forEach(function (router_data) {
	var router = express.Router();
	
	router_data.routes.forEach(function (route_data) {
		var r = router.route(route_data.path);
		route_data.usage.forEach(function (u) {
			r[u.verb](u.func);
		});
	});

	router.use(function (err, req, res, next) {
		if (_.isUndefined(err.status)) {
			return res.status(500).send(err.message);
		} else {
			return res.status(err.status).send(err.message);
		}
	});

	app.use(router_data.prefix, router);
});



app.all('/*', function (req, res) {
	res.sendFile(publicPath + '/index.html');
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('App listening at http://%s:%s', host, port);
});
