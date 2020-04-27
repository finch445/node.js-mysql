var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "pi",
  password: "nopassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
