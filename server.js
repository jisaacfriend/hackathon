var express = require('express'),
	vehicles = require('./routes/vehicles');

var app = express();

app.get('/vehicles', vehicles.findAll);
app.get('vehicles:id', vehicles.findById);
app.use('/', express.static(__dirname + '/'));

app.listen(80, function() { console.log('listening'); });