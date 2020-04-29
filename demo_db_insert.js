//Insert a record in the "customers" table.

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "username",
	password: "userpassword",
	database: "mydb"
});

con.connect(function (err){
	if (err) throw err;
	console.log("connected!!");
	var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
	con.query(sql, function(err, result) {
		if (err) throw err;
		console.log("1 record inserted.");
	});
})