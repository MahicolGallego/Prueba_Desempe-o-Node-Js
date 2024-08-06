CREATE DATABASE ecomfast;
USE ecomfast;

CREATE TABLE permissions(
	id INT PRIMARY KEY auto_increment,
    role_id INT NOT NULL,
    entity_id INT NOT NULL,
    can_create boolean NOT NULL,
    can_delete boolean NOT NULL,
    can_get boolean NOT NULL,
    can_update boolean NOT NULL,
    
    FOREIGN KEY (role_id) references roles(id),
    FOREIGN KEY (entity_id) references entities(id)
);

INSERT INTO roles(name) VAlUES("admin"), ("client");