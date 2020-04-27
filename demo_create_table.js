/*
To create a table in MySQL, use the "CREATE TABLE" statement.
Make sure you define the neme of the databse when you create the connection.

Here is an example of create a table named "customers" .
*/

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "username",
	password: "userpassword",
	database: "mydb"
});

con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!!");
	var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
	con.query(sql, function(err, result) {
		if (err) throw err;
		console.log("Table created!!");
	});
});