//If we have multiple placeholders, the array contains multiple values, in that order:

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
	var name = 'Amy';
	var adr = 'Mountain 21';
	var sql = 'SELECT * FROM customers WHERE address = ? OR name = ?';
	con.query(sql, [adr, name], function(err, result){
		if (err) throw err;
		console.log(result);
	});
});