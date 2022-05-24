DROP DATABASE IF EXISTS rest_exercises;

CREATE DATABASE IF NOT EXISTS rest_exercises;

USE rest_exercises;

CREATE TABLE IF NOT EXISTS products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    brand VARCHAR(100) NOT NULL
);

INSERT INTO products (name, brand)
VALUES ('Cerveja Skol', 'Ambev'),
    ('Monitor AGON', 'AOC'),
    ('MacBook Air', 'Apple');
SELECT * FROM products;