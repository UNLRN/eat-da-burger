const db = require('./connection');

let orm = {
	selectAll: function (table, cb) {
		db.query(`SELECT * FROM ??`, [table], function (err, results, fields) {
			cb(err, results);
		})
	},

	insertOne: function (table, column, columnValue, cb) {
		db.query(`INSERT INTO ?? (??) VALUES (?)`, [table, column, columnValue], function (err, results, fields) {
			if (err) throw (err);
			cb(results);
		})
	},

	updateOne: function (table, columnCondition, rowCondition, cb) {
		db.query(`UPDATE ?? SET ?? = ? WHERE ?? = ?`, [table, ...columnCondition, ...rowCondition], function (err, results, fields) {
			if (err) throw err;
			cb(results);
		})
	},
}

module.exports = orm;
