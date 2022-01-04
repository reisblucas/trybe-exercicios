const books = require('./base');

const authorsFantasyAndSF = array => {
  let filtered = array.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
  let mapped = filtered.map((book) => book.author.name);
  return mapped.sort((a, b) => a.localeCompare(b));
};

console.log(authorsFantasyAndSF(books));
