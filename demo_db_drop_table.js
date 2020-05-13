// You can delete an existing table by using the DROP TABLe statement.

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "username",
	password: "userpassword",
	database: "mydb"
});

con.connect(function(err){
	if (err) throw err;
	var sql = "DROP TABLE customers";
	console.log("Database connected!!");
	con.query(sql, function(err, result){
		if (err) throw err;
		console.log("Table deleted.");
	});
});