var mysql = require("mysql");
var inquirer = require("inquirer");
require('dotenv').config()
var available_stock =0;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASS,
    database: "bamazon"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    start_promise();
})

function display_items(){

    connection.query("SELECT id, product_name, price FROM products", function(err, response){

        if(err) throw err;

        for(var i = 0; i < response.length; i++){
            console.log("\n\r");
            console.log("Id: " + response[i].id + " Name: " + response[i].product_name + " Price: " + response[i].price);      
        }
        
    })
}
//The app should then prompt users with two messages.
//* The first should ask them the ID of the product they would like to buy.
//* The second message should ask how many units of the product they would like to buy.
function start_promise(){
    display_items();
    inquirer.prompt([
        {
        name: "id",
        type: "input",
        message: "Which product you want to buy? [Choose by ID]",
        validate: function(value){
            if(isNaN(value) === false){
                return true;
            }
            return false;
            }
        },
        {
        name: "quantity",
        type: "input",
        message: "How many units of the product they would like to buy?",
        validate: function(value){
            if(isNaN(value) === false){
                return true;
            }
            return false;
            }   
        }
]).then(function(answer){
        var user_id = answer.id;
        var user_quantity = parseInt(answer.quantity);

        connection.query("SELECT * FROM products WHERE id = ?", [user_id],function(err, response){
        if(err) throw err;

        var available_stock = response[0].stock_quantity;
        
        if(available_stock >=  user_quantity){

           var stock_left = available_stock - user_quantity;
           
           connection.query("UPDATE products SET ? WHERE ?", 
           [
               {
                   stock_quantity:stock_left,
                },
            {
                id: user_id
            }
        ], function(err){
            if (err) throw err;
            console.log("==============================================");
            console.log("\n\r");
            console.log( response[0].stock_quantity + " Items left in stock");
            console.log("\n\r");
            console.log("Thank you for shopping");
            console.log("==============================================");
              });
            }
        else{
            console.log("Not enough available, please choose a different quantity");
            console.log("\n\r");
            console.log("==============================================");
            }
        })
    })
}
