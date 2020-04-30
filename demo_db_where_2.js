/*
Select a record with a given letter or phrase
Use the '%' wildcard to represent zero, one , or multiple characters

Here is an example of selecting records where the address begins with the letter "S".
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
	var sql = "SELECT * FROM customers WHERE address LIKE 'S%'";
	con.query(sql, function(err,result){
		if (err) throw err;
		console.log(result);
	});
});