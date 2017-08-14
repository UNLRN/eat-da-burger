const db = require('./connection');

let orm = {
	selectAll: function (table, cb) {
		db.query(`SELECT * FROM ??`, [table], function (err, results, fields) {
			cb(err, results);
		})
	},

	insertOne: function (table, column, columnValue, cb) {
		db.query(`INSERT INTO ?? (??) VALUES (?)`, [table, column, columnValue], function (err, results, fields) {
			cb(err, results);
		})
	},

	updateOne: function (table, columnCondition, rowCondition, cb) {
		db.query(`UPDATE ?? SET ?? = ? WHERE ?? = ?`, [table, ...columnCondition, ...rowCondition], function (err, results, fields) {
			cb(err, results);
		})
    },
    
    deleteOne: function (table, rowCondition, cb) {
        db.query(`DELETE FROM ?? WHERE ?? = ?`, [table, ...rowCondition], function(err, results, fields){
            cb(err, results);
        })
    }
}

module.exports = orm;
