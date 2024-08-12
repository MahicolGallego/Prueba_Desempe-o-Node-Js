CREATE DATABASE IF NOT EXISTS ecomfast;
USE ecomfast;

-- inserts roles
INSERT INTO roles(name) VAlUES("admin"), ("client");

-- inserts entities
INSERT INTO entities(name) VAlUES("cart"),
("order"),
("carts_products"),
("orders_products"),
("product"),
("user");

-- inserts permissions
INSERT INTO permissions(role_id, entity_id, can_create, can_update, can_delete, can_get, can_getone) 
VAlUES(1, 1, false, false, false, true, true),
(1, 2, false, true, true, true, true),
(1, 3, false, false, false, true, true),
(1, 4, false, false, false, true, true),
(1, 5, true, true, true, true, true),
(1, 6, true, true, true, true, true),

(2, 1, false, true, true, false, true),
(2, 2, true, false, true, false, true),
(2, 3, true, true, true, false, true),
(2, 4, false, false, false, false, true),
(2, 5, false, false, false, true, true),
(2, 6, true, true, false, false, true);

-- inserts users
INSERT INTO users (email, password, role_id) VALUES
('admin1@example.com', 'password123', 1),  -- Admin
('client1@example.com', 'password123', 2), -- Client
('client2@example.com', 'password123', 2), -- Client
('client3@example.com', 'password123', 2), -- Client
('admin2@example.com', 'password123', 1),  -- Admin
('client4@example.com', 'password123', 2), -- Client
('client5@example.com', 'password123', 2), -- Client
('client6@example.com', 'password123', 2), -- Client
('admin3@example.com', 'password123', 1),  -- Admin
('client7@example.com', 'password123', 2); -- Client

-- inserts products
INSERT INTO products (name, price, description, stock) VALUES
('Product A', 10.99, 'Description for Product A', 50),
('Product B', 20.99, 'Description for Product B', 30),
('Product C', 15.49, 'Description for Product C', 40),
('Product D', 8.99, 'Description for Product D', 60),
('Product E', 25.00, 'Description for Product E', 20),
('Product F', 5.49, 'Description for Product F', 70),
('Product G', 30.00, 'Description for Product G', 10),
('Product H', 12.99, 'Description for Product H', 25),
('Product I', 22.50, 'Description for Product I', 35),
('Product J', 18.75, 'Description for Product J', 45);

-- inserts carts
INSERT INTO carts (user_id) VALUES
(2), -- Client 1 has one cart
(3), -- Client 2 has one cart
(4), -- Client 3 has one cart
(6), -- Client 4 has one cart
(7), -- Client 5 has one cart
(8), -- Client 6 has one cart
(9); -- Client 7 has one cart

-- inserts productcarts
INSERT INTO carts_products (cart_id, product_id, quantity, status) VALUES
(1, 1, 2, 'a'),  -- Cart 1 (Client 1) has 2 of Product A
(1, 2, 1, 'a'),  -- Cart 1 (Client 1) has 1 of Product B
(2, 4, 1, 'a'),  -- Cart 1 (Client 2) has 1 of Product D
(3, 5, 3, 'a'),  -- Cart 1 (Client 3) has 3 of Product E
(3, 3, 2, 'a'),  -- Cart 1 (Client 3) has 2 of Product C
(4, 7, 1, 'a'),  -- Cart 1 (Client 4) has 1 of Product G
(5, 9, 2, 'a'),  -- Cart 1 (Client 5) has 2 of Product I
(6, 10, 1, 'a'), -- Cart 1 (Client 6) has 1 of Product J
(7, 1, 3, 'a');  -- Cart 1 (Client 7) has 3 of Product A

