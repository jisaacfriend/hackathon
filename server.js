var express = require('express'),
	path = require('path');

var app = express();

app.get('/api/vehicles', function(req, res) {
	res.sendFile(path.normalize(__dirname + '/data/samples.json'));
});
app.get('/api/vehicles/:id', function(req, res) {
	var fileName = req.params.id + '.json';
	res.sendFile(path.normalize(__dirname + '/data/' + fileName));
});
app.use('/', express.static(__dirname + '/'));

app.listen(80, function() { console.log('listening'); });