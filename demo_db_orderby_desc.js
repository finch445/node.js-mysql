// sort the result reverse alphabetically by name.

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "username",
	password: "userpassword",
	database: "mydb"
});

con.connect(function(err){
	if (err) throw err;
	console.log("Database connected!!")
	con.query("SELECT * FROM customers ORDER BY name DESC", function(err, result){
		if (err) throw err;
		console.log(result);
	});
});

