var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "Gg30358240!",
    database: "bamazon"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    connection.end();
})