CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	id INTEGER(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price INTEGER(11) NOT NULL,
    stock_quantity INTEGER(11) NOT NULL
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES 
('water_bottle', 'food', 2.50, 200),
('nike_cap', 'clothing', 25.00, 15),
('Lenovo_laptop', 'electronics', 400.00, 5),
('maroon_srhit', 'clothing', 10.00, 35),
('Logictech_mouse', 'electronics', 45.00, 10),
('Samsung_S8_phone', 'electronics', 800.00, 5),
('Jansport_bakcpack', 'school_supplies', 85.00, 20),
('Expo_markers_black', 'school_supplies', 15.00, 50),
('Expo_markers_red', 'school_supplies', 15.00, 50),
('Expo_markers_blue', 'school_supplies', 15.00, 50);
