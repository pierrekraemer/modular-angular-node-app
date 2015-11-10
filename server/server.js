var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

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

app.all('/*', function (req, res) {
	res.sendFile(publicPath + '/index.html');
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('App listening at http://%s:%s', host, port);
});
