-- Exercises: 

-- 1 
-- SELECT * FROM Pixar.Movies;
-- INSERT INTO Pixar.`Movies` (title, director, year, length_minutes)
-- 	VALUES
-- 		('Monstros SA', 'Pete Docter', '2001', '92'),
-- 		('Procurando Nemo', 'John Lasseter', '2003', '107'),
--         ('Os Incríveis', 'Brad Bird', '2004', '116'),
--         ('WALL-E', 'Pete Docter', '2008', '104');
        
-- 2
-- SELECT * FROM Pixar.BoxOffice;
-- INSERT INTO Pixar.`BoxOffice` (movie_id, rating, domestic_sales, international_sales) VALUES (9, 6.8, 450000000, 370000000);

-- 3
-- SELECT * FROM Pixar.Movies;

-- UPDATE Pixar.`Movies`
-- SET director = 'Andrew Staton'
-- WHERE id = 9;

-- 4
-- SELECT * FROM Pixar.`Movies`;

-- UPDATE Pixar.`Movies`
-- SET title = 'Ratatouille', year = 2007
-- WHERE id = 3;

-- 5
-- SELECT * FROM Pixar.`BoxOffice`;

-- INSERT INTO Pixar.`BoxOffice`
-- 	(movie_id, rating, domestic_sales, international_sales)
-- 	VALUES
-- 		(8, 8.5, 300000000, 250000000),
--         (10, 7.4, 460000000, 510000000),
--         (11, 9.9, 290000000, 280000000);

-- 6
-- SET FOREIGN_KEY_CHECKS = 0;
-- DELETE FROM Pixar.`Movies` WHERE id = 11;
-- SET FOREIGN_KEY_CHECKS = 1; 

-- 7
-- SET FOREIGN_KEY_CHECKS = 0;
-- DELETE FROM Pixar.`Movies` WHERE director = 'Andrew Staton';
-- SET FOREIGN_KEY_CHECKS = 1;