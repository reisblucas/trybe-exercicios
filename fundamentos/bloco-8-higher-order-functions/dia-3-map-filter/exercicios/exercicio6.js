const books = require('./base');

const oldBooksOrdered = array => array.filter((book) => parseInt(2022 - book.releaseYear) >= 60).sort((a, b) => b.releaseYear - a.releaseYear).map((book) => book.name);

console.log(oldBooksOrdered(books));
