var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "username",
	password: "userpassword"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!!");
	con.query("CREATE DATABASE mydb", function (err, result){
		if (err) throw err;
		console.log("Database created.");
	});
});

/* Error showing: error code 1044

<solution>
1.Go to MariaDB setting and create a new user 
CREATE USER 'exampleuser'@'localhost' IDENTIFIED BY 'pimylifeup';

2. grant all privileges to the user
GRANT ALL PRIVILEGES ON exampledb.* TO 'exampleuser'@'localhost';

3.Flush table.
FLUSH PRIVILEGES;
*/
