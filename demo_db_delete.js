/* delete records from an existing table by using the "DELETE FROM" statement.
 NOTICE: beaware the 'WHERE' clause specifies which record or records that should be deleted.
If you omit the WHERE clause, all the record will be deleted.
*/

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "username",
	password: "userpassword",
	database: "mydb"
});

con.connect(function(err){
	if (err) throw err;
	var sql = "DELETE FROM customers WHERE address = 'Blue Villiage 1'";
	console.log("Database connected!!");
	con.query(sql, function(err,result){
		if (err) throw err;
		console.log("Number of records deleted: " + result.affectedRows);
	});
});