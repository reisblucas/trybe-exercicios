SELECT UCASE('Hello world');
SELECT LCASE('RED FLAG FOR LOWER CASE IN SQL');
SELECT REPLACE('Hello world, I\'m new in SQL', 'o', 'XXXX');
SELECT LEFT('It\'s a beautiful day outside', 5);
SELECT RIGHT('It\'s a beautiful day outside', 5);

SELECT CHAR_LENGTH('Hello Worldddddddddddddddddddd!'); -- same value
SELECT CHAR_LENGTH('Hello Worldddddddddddddddddddd!'); -- same value
SELECT CHAR_LENGTH('€'); -- character length
SELECT LENGTH('€'); -- bytes size length

SELECT SUBSTRING('Hi, I\'m a string', 5, 4);
SELECT SUBSTRING('Hi, I\'m a string', 5, 8);

-- -- -- -- -- 

-- Consolidation Exercises:
SELECT UCASE('trybe');

SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

SELECT CHAR_LENGTH('that\'s a random phrase'); -- 22
SELECT LENGTH('that\'s a random phrase€'); -- 25

SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

-- CONDITIONALS:

