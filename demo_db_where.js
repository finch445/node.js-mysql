// When selecting records from a table, you can filter the selection by using the  "WHERE" statement.
// Here is an example of selecting a record with address "Park Lane 38".

var mysql= require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "username",
	password: "userpassword",
	database: "mydb"
});

con.connect(function(err){
	if (err) throw err;
	var sql = "SELECT * FROM customers WHERE address = 'Park Lane 38'";
	con.query(sql, function(err, result){
		if (err) throw err;
		console.log(result);
	});
});