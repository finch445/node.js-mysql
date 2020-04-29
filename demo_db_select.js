// Select all records from "customers" table, and display the result object.

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "username",
	password: "userpassword",
	database: "mydb"
});

con.connect(function(err){
	if (err) throw err;
	con.query("SELECT * FROM customers", function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});