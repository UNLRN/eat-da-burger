const orm = require('../config/orm');

let burgers =  {
	all: function(cb){
		orm.selectAll('burgers', function(err, result) {
			cb(err, result);
		})
	},
	insertBurger: function(column, columnValue, cb){
		orm.insertOne('burgers', column, columnValue, function(err, result){
			cb(err, result);
		})
	},
	updateBurger: function(columnCondition, rowCondition, cb) {
		orm.updateOne('burgers', columnCondition, rowCondition, function(err, result){
			cb(err, result);
		})
	}
}

module.exports = burgers;