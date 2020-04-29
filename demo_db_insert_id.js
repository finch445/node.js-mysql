// insert a record into "Customers" table, and return ID


/*
When executing a query, a result object is returned.
The result object contains information about how the query affectd the table.
The result object returned from the example above looks like this:

{
  fieldCount: 0,
  affectedRows: 14,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '\'Records:14  Duplicated: 0  Warnings: 0',
  protocol41: true,
  changedRows: 0
}
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
	console.log("Connected!!");
	var sql = "INSERT INTO customers (name, address) VALUES ('Anderson', 'Blue Villiage 1')";
	con.query(sql, function(err, result){
		if (err) throw err;
		console.log("1 record inserted, ID: " + result.insertId);
	});
});