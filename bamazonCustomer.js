var mysql = require("mysql");
var inquirer = require("inquirer");
var available_stock =0;

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "Gg30358240!",

    database: "bamazon"
});

connection.connect(function(err){

    if (err) throw err;

    console.log("Connected");

    display_items();
})



function display_items(){

    connection.query("SELECT id, product_name, price FROM products", function(err, response){

        if(err) throw err;

        for(var i = 0; i < response.length; i++){
            console.log("\n\r");
            console.log("Id: " + response[i].id + " Name: " + response[i].product_name + " Price: " + response[i].price);      
        }
        
    })
    start_promise();
}
//The app should then prompt users with two messages.
//* The first should ask them the ID of the product they would like to buy.
//* The second message should ask how many units of the product they would like to buy.
function start_promise(){
    inquirer.prompt([
        {
        name: "buy",
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


    connection.query("SELECT * FROM `products` WHERE `id` = ?", {id: answer.buy}, function(err, response){
        if (err) throw err;
        var available_stock = response[0].stock_quantity;

        var user_input = answer.quantity;
        
        if(available_stock >=  user_input){

            var stock_left = available_stock - user_input;
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: stock_left
                    },
                    {
                        id: answer.buy
                    }
                ],
                function (err) {
                    //console.log(price, amountBought);
                        if (err) throw err;
                            console.log("==============================================");
                            console.log("\n\r");
                            console.log( response[0].stock_quantity + " Items left in stock");
                            console.log("\n\r");
                            console.log("Thank you for shopping");
                            console.log("==============================================");
                                }
                );
                    } else {
                            console.log("Not enough available, please choose a different quantity");
                            console.log("\n\r");
                            console.log("==============================================");
                           }
                        })
                    })
                }                  
                

