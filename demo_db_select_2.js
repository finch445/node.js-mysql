// To select only some of the columns in a table, use the "SELECT" statement followed by the column name.
//Select part of object and return.
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "username",
	password: "userpassword",
	database: "mydb"
});

con.connect(function (err){
	if (err) throw err;
	con.query("select name, address FROM customers", function(err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});