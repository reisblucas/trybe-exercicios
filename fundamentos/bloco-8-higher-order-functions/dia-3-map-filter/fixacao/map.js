const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const refreshPrices = (productsList, pricesList) => productsList.map((product, index) => ({ [product]: pricesList[index]}));

console.log(refreshPrices(products, prices));
