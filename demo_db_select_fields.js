// Display the fields object

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
	con.query("select name, address FROM customers", function(err, result, fields) {
		if (err) throw err;
		console.log(fields);
		console.log(fields[1].name); // produce fields[1] name's object
		console.log(fields[1].table);// produce fields[1] table's object
	});
});