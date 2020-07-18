//Dependencies
var orm = require('../config/orm.js');

var burger = {
    selectAll: function (cb) {
        //ORM Method to execute SQL statement and send result
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

//Exports database function to burger.js
module.exports = burger;
