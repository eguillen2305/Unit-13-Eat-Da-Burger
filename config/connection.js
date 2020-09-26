var mysql = require('mysql');

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	var connection = mysql.createConnection({
		host: 'localhost',
		port: 3306,
		user: 'root',
		password: 'yourRootPassword',
		database: 'burgers_db'
	});
}

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
	if (error) throw error;
	console.log('Sucessful connection: ', results[0].solution);
});

module.exports = connection;
