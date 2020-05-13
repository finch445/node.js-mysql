var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "william",
	password: "nopassword",
	database: "mydb"
});

con.connect(function(err){
	if (err) throw err;
	var sql = "DROP TABLE IF EXISTS customers";
	console.log("Database connected!!");
	con.query(sql, function(err, result){
		if (err) throw err;
		console.log("Table deleted.");
		console.log(result);
	});
});

/*
If the table exist, the result object will look like this:

{
  fieldCount: 0,
  affectedRows: 0,
  insertId: 0,
  serverstatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}

If the table does not exist, the result object will look like this:

{
  fieldCount: 0,
  affectedRows: 0,
  insertId: 0,
  serverstatus: 2,
  warningCount: 1,
  message: '',
  protocol41: true,
  changedRows: 0
}

As you can see the only differnce is that the warningCount property is set to 1 if the table does not exist.



*/