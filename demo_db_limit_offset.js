//If you want to return five records, starting from the third record, you can use the "OFFSET" keyword
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
	//The numbers are reversed: "LIMIT 2, 5" is the same as "LIMIT 5 OFFSET 2"
	//var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
	var sql = "SELECT * FROM customers LIMIT 2,5";
	con.query(sql, function(err, result){
		if (err) throw err;
		console.log(result);
	});
});
