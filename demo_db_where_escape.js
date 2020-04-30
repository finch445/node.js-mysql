/*
When query values are variables provided by the user, you should escape the values.
This is prevent SQL injections, which is a common web hacking technique to destroy or miuse your database.
The MySQL module has methods to escape query values.
*/

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "USERNAME",
	password: "USERPASSWORD",
	database: "mydb"
});

con.connect(function(err){
	if (err) throw err;
	console.log("Connected!!");
	var adr = 'Mountain 21';
	var sql = 'SELECT * FROM customers WHERE address =' + mysql.escape(adr);
	con.query(sql, function(err, result){
		if (err) throw err;
		console.log(result);
	});
});