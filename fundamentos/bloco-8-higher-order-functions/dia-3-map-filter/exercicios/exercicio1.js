const books = require('./base');

const formatedBookNames = books => books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

console.log(formatedBookNames(books));
