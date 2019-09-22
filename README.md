# bamazon

Overview

in this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this unit. The app will take in orders from customers and deplete stock from the store's inventory. As a bonus task, you can program your app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

Clone repo.
Run command in Terminal or Gitbash 'npm install'
Run command depending which mode you would like to be on:
Customer - 'npm run customer'
Exective - 'npm run exective'
Run 'ctrl + c' to exit each mode
What Each JavaScript Does
BamazonCustomer.js

Prints the products in the store.

Prompts customer which product they would like to purchase by ID number.

Asks for the quantity.

If there is a sufficient amount of the product in stock, it will return the total for that purchase.
However, if there is not enough of the product in stock, it will tell the user that there isn't enough of the product.
If the purchase goes through, it updates the stock quantity to reflect the purchase.
It will also update the product sales in the department table.
BamazonManager.js

Starts with a menu:

View Products for Sale

End Session

If the manager selects View Products for Sale, it lists all of the products in the store including all of their details.

If the manager selects View Low Inventory, it'll list all the products with less than five items in its StockQuantity column.

If the manager selects Add to Inventory, it allows the manager to select a product and add inventory.

If the manager selects End Session, it ends the session and doesn't go back to the menu.

BamazonExecutive.js

Starts with a menu:

End Session
If the manager selects View Product Sales by Department, it lists the Department Sales and calculates the total sales from the overhead cost and product sales.

If the manager selects Create New Department, it allows the manager to create a new department and input current overhead costs and product sales. If there are none, by default it will set at 0.

If the manager selects End Session, it ends the session and doesn't go back to the menu.

![alt text](http://url/to/.png)
![picture](img/mysql.png)

Technologies used

Node.js
Inquire NPM Package 
MYSQL NPM Package 

Prerequisites
- Node.js - Download the latest version of Node https://nodejs.org/en/
- Create a MYSQL database called 'Bamazon', reference schema.sql
Built With
Sublime Text - Text Editor
MySQLWorkbench
Terminal/Gitbash
Author
Guillermo Lara