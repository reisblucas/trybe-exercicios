const books = require('./base');

const authorWith3DotsOnName = array => array.filter((book) => (book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.'))[0].name;

console.log(authorWith3DotsOnName(books));
