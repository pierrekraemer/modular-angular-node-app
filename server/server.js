'use strict';

const
express = require('express'),
ioc = require('electrolyte'),
body_parser = require('body-parser'),
favicon = require('serve-favicon'),
path = require('path'),
_ = require('lodash');


const app = express();
app.disable('x-powered-by');


const public_path = path.resolve('../client/public');
app.use(express.static(public_path));

app.use(body_parser.json());

app.all('*', (req, res, next) => {
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


ioc.use('config', ioc.dir('config/'));
ioc.use('models', ioc.dir('models/'));
ioc.use('controllers', ioc.dir('controllers/'));
ioc.use('services', ioc.dir('services/'));
ioc.use('routes', ioc.dir('routes/'));


const db = ioc.create('config/db');

const models = require('./models');
Object.keys(models).forEach((model_name) => {
	models[model_name].associate(models);
});

db.connection.sync({ force: true });


const routers_data = require('./routes');
routers_data.forEach((router_data) => {
	const router = express.Router({ mergeParams: true });

	router_data.routes.forEach((route_data) => {
		const r = router.route(route_data.path);
		route_data.usage.forEach(function (u) {
			r[u.verb](u.func);
		});
	});

	router.use((err, req, res, next) => {
		if (_.isUndefined(err.status)) {
			return res.status(500).send(err.message);
		} else {
			return res.status(err.status).send(err.message);
		}
	});

	app.use(router_data.prefix, router);
});


app.all('/*', (req, res) => {
	res.sendFile(public_path + '/index.html');
});


var server = app.listen(3333, () => {
	var host = server.address().address;
	var port = server.address().port;
	console.log('App listening at http://%s:%s', host, port);
});
