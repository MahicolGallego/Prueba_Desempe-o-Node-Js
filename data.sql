-- inserts roles
INSERT INTO roles(name) VAlUES("admin"), ("client");

-- inserts entities
INSERT INTO entities(name) VAlUES("order"), ("user");

-- inserts permissions
INSERT INTO permissions(role_id, entity_id, can_create, can_update, can_delete, can_get) 
VAlUES(1, 1, true, true, true, true), 
(1, 1, true, true, true, true), 
(2, 1, true, false, false, true), 
(2, 2, false, true, false, true);

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
(2), -- Client 1 has another cart
(3), -- Client 2 has one cart
(4), -- Client 3 has one cart
(4), -- Client 3 has another cart
(5), -- Admin 2 has one cart (for variety)
(6), -- Client 4 has one cart
(7), -- Client 5 has one cart
(8), -- Client 6 has one cart
(9); -- Client 7 has one cart

-- inserts productcarts
INSERT INTO productcarts (cart_id, product_id, quantity) VALUES
(1, 1, 2),  -- Cart 1 (Client 1) has 2 of Product A
(1, 2, 1),  -- Cart 1 (Client 1) has 1 of Product B
(2, 3, 4),  -- Cart 2 (Client 1) has 4 of Product C
(3, 4, 1),  -- Cart 1 (Client 2) has 1 of Product D
(4, 5, 3),  -- Cart 1 (Client 3) has 3 of Product E
(4, 6, 2),  -- Cart 2 (Client 3) has 2 of Product F
(5, 7, 1),  -- Cart 1 (Admin 2) has 1 of Product G
(6, 8, 5),  -- Cart 1 (Client 4) has 5 of Product H
(7, 9, 2),  -- Cart 1 (Client 5) has 2 of Product I
(8, 10, 1), -- Cart 1 (Client 6) has 1 of Product J
(9, 1, 3);  -- Cart 1 (Client 7) has 3 of Product A

-- inserts productcarts
-- Order 1: Producto A en el carrito 1 (Client 1)
INSERT INTO orders (user_id, product_cart_id, total) VALUES
(2, 1, 21.98); -- Client 1, Cart 1: (Product A x2)

-- Order 2: Producto B en el carrito 1 (Client 1)
INSERT INTO orders (user_id, product_cart_id, total) VALUES
(2, 1, 20.99); -- Client 1, Cart 1: (Product B x1)

-- Order 3: Producto C en el carrito 2 (Client 1)
INSERT INTO orders (user_id, product_cart_id, total) VALUES
(2, 2, 61.96); -- Client 1, Cart 2: (Product C x4)

-- Order 4: Producto D en el carrito 3 (Client 2)
INSERT INTO orders (user_id, product_cart_id, total) VALUES
(3, 3, 8.99);  -- Client 2, Cart 1: (Product D x1)

-- Order 5: Producto E en el carrito 3 (Client 2)
INSERT INTO orders (user_id, product_cart_id, total) VALUES
(3, 3, 75.00); -- Client 2, Cart 1: (Product E x3)

-- Order 6: Producto E en el carrito 4 (Client 3)
INSERT INTO orders (user_id, product_cart_id, total) VALUES
(4, 4, 25.00); -- Client 3, Cart 1: (Product E x1)

-- Order 7: Producto F en el carrito 4 (Client 3)
INSERT INTO orders (user_id, product_cart_id, total) VALUES
(4, 4, 10.98); -- Client 3, Cart 1: (Product F x2)

-- Order 8: Producto H en el carrito 5 (Client 3)
INSERT INTO orders (user_id, product_cart_id, total) VALUES
(4, 5, 64.95); -- Client 3, Cart 2: (Product H x5)

-- Order 9: Producto G en el carrito 6 (Admin 2)
INSERT INTO orders (user_id, product_cart_id, total) VALUES
(5, 6, 30.00); -- Admin 2, Cart 1: (Product G x1)

-- Order 10: Producto I en el carrito 7 (Client 4)
INSERT INTO orders (user_id, product_cart_id, total) VALUES
(6, 7, 45.00); -- Client 4, Cart 1: (Product I x2)

-- WIP: Fixes to the permissions model and adding queries to save data to the .sql file
