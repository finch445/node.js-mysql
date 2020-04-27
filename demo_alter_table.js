/*
If the table already exists, use the ALTER TABLE keyword
Here is an example of create primary key on an existing table.
*/

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "username",
	password: "userpassword",
	database: "mydb"
});

con.connect(function (err){
	if (err) throw err;
	console.log("Connected!!");
	var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
	con.query(sql, function(err, result){
		if (err) throw err;
		console.log("Table altered.");
	});
});