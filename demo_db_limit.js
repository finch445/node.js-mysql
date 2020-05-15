//limit the number of records returned from the query, by using the "LIMIT" statement

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "username",
	password: "userpassword",
	database: "mydb"
});

con.connect(function(err){
	if (err) throw err;
	console.log("Database connectec!!");
	var sql = "SELECT * FROM customers LIMIT 5";
	con.query(sql, function(err, result){
		if (err) throw err;
		console.log(result);
	});
});

