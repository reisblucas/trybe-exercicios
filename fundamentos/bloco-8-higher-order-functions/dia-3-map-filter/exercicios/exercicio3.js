const books = require('./base');

const fantasyOrScienceFiction = array => array.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

console.log(fantasyOrScienceFiction(books));
