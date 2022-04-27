-- Bonus:

-- 1
-- UPDATE Pixar.BoxOffice SET rating = 9 WHERE domestic_sales > 400000000;

-- 2
-- UPDATE Pixar.`BoxOffice` SET rating = 6 WHERE (international_sales < 300000000 AND domestic_sales > 200000000);

-- 3
-- SET FOREIGN_KEY_CHECKS = 0;
-- DELETE FROM Pixar.`Movies` WHERE length_minutes < 100;
-- SET FOREIGN_KEY_CHECKS = 1;