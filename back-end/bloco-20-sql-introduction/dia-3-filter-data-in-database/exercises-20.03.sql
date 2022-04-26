-- -- Exercises:

-- 1 
-- SELECT 
--     *
-- FROM
--     PecasFornecedores.Pecas
-- WHERE
--     name LIKE 'gr%';

-- 2
-- SELECT 
--     *
-- FROM
--     PecasFornecedores.Pecas
-- WHERE
--     code = 2;

-- 3
-- SELECT 
--     peca, Preco, Fornecedor
-- FROM
--     PecasFornecedores.Fornecimentos
-- WHERE
--     Fornecedor LIKE '%N%'; -- Like: Cost a lot of proccessment, cpu, (fat memory)
    
-- 4
-- SELECT 
--     *
-- FROM
--     PecasFornecedores.Fornecedores
-- WHERE
--     name LIKE '%LTDA%';

-- 5
-- SELECT 
--     *
-- FROM
--     PecasFornecedores.Fornecedores
-- WHERE
--     code LIKE '%F%';

-- 6
-- SELECT 
--     *
-- FROM
--     PecasFornecedores.Fornecimentos
-- WHERE
--     Preco BETWEEN 15 AND 40
-- ORDER BY Preco;

-- 7
-- SELECT 
--     *
-- FROM
--     Vendas
-- WHERE
--     DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';