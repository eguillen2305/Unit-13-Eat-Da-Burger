var orm = require('../config/orm.js');

var burger = {
	selectAll: function(cb) {
		// ORM SELECT ALL HERE
		orm.selectAll('burger', function(res) {
			cb(res);
		});
	},
	insertOne: function(cols, vals, cb) {
		orm.insertOne('burger', cols, vals, function(res) {
			cb(res);
		});
	},
	updateOne: function(objColVals, condition, cb) {
		console.log('Model' + objColVals);
		orm.updateOne('burger', objColVals, condition, function(res) {
			cb(res);
		});
	}
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;
