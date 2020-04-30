/*
We can also use '?' as a placeholder for the value you want to escape.
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
	var sql = 'SELECT * FROM customers WHERE address = ?';
	con.query(sql, [adr], function(err, result){
		if (err) throw err;
		console.log(result);
	});
});