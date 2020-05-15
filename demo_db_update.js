//update existing records in a table by using the "UPDATE" statement.
//Overwrite the address column from "Valley 345" to "Canyon 123"

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "username",
	password: "userpassword",
	database: "mydb"
});

con.connect(function(err){
	if (err) throw err;
	console.log("Connected!!");
	var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
	con.query(sql, function(err, result){
		if (err) throw err;
		console.log(result.affectRows + "Record(s) updated.");
	});
});