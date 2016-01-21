/*
var mongo = require('mongodb');

var Server = mongo.Server,
	Db = mongo.Db,
	BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('vehicledb', server);

db.open(function(err, db) {
	if(!err) {
		console.log('Connected to vehicles database.');
		db.collection('vehicles', {strict: true}, function(err, collection) {
			if(err) {
				console.log('The vehicles collection does not exist.  Creating it with sample data.');
				populateDB();
			}
		});
	}
});

exports.findById = function(req, res) {
	var id = req.params.id;
	console.log('Retrieving vehicle: ' + id);
	db.collection('vehicles', function(err, collection) {
		collection.findOne({'_id'new BSON.ObjectID(id)}, function(err, item) {
			res.send(item);
		});
	});
};

exports.findAll = function(req, res) {
	db.collection('vehicles', function(err, collection) {
		collection.find().toArray(function(err, items) {
			res.send(items);
		});
	});
};

var populateDB = function() {

	var vehicles = [
	{

	}];

	db.collection('vehicles', function(err, collection) {
		collection.insert(vehicles, {safe:true}, function(err, result) {});
	});
};
*/

exports.findAll = function(req, res) {
	res.send([{vehicle: 'vehicle1'}, {vehicle: 'vehicle2'}, {vehicle: 'vehicle2'}]);
};

exports.findById = function(req, res) {
	res.send({id:req.params.id, vehicle: "Vehicle", description: "Test Vehicle"});
};