DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
id INTEGER(9) NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price DECIMAL(3,2) NOT NULL,
stock_quantity INTEGER(30) NOT NULL,
PRIMARY KEY (id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Laptop", "Electronics", 999.98, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Iphone11", "Cellphones", 699.98, 23);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Iphone6Splus", "Cellphones", 459.98, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Airpods", "Audio", 159.98, 53);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Nikon Camera", "Cameras", 69.98, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Samsung TV", "Television", 159.98, 53);

SELECT * FROM products;