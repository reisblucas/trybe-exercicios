const books = require('./exercise');

books.sort((a, b) => {
  if (a.releaseYear < b.releaseYear) {
    return 1;
  }
  if (a.releaseYear > b.releaseYear) {
    return -1;
  }
  return 0;
});

console.log(books);