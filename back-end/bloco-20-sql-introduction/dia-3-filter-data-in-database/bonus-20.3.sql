-- Bônus: 

--  1
-- SELECT * FROM Scientists WHERE name LIKE '%e%';

--  2
-- SELECT 
--     *
-- FROM
--     Scientists.Projects
-- WHERE
--     Code LIKE 'A%'
-- ORDER BY Code;

-- 3
-- SELECT 
--     *
-- FROM
--     Scientists.Projects
-- WHERE
--     Code LIKE '%3%'; 

-- 4
-- SELECT 
--     *
-- FROM
--     Scientists.Projects
-- WHERE
--     Code IN ('AeH3' , 'Ast3', 'Che1');

-- 5
-- SELECT 
--     *
-- FROM
--     Scientists.Projects
-- WHERE
--     Hours > 500
-- ORDER BY Hours;

-- 6
-- SELECT 
--     *
-- FROM
--     Scientists.Projects
-- WHERE
--     Hours BETWEEN 250 AND 800
-- ORDER BY Hours; 

-- 7
-- SELECT 
--     *
-- FROM
--     Scientists.Projects
-- WHERE
--     Name NOT LIKE 'A%'
-- ORDER BY Name; 

-- 8
-- SELECT 
--     *
-- FROM
--     Scientists.Projects
-- WHERE
--     Code LIKE '%H%'
-- ORDER BY Code;