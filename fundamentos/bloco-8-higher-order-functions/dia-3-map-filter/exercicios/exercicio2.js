const books = require('./base');

const nameAndAge = array => {
  let mapped = array.map((book) => ({ 
    age: parseInt(book.releaseYear - book.author.birthYear),
    author: book.author.name
  }));

  return mapped.sort((a, b) => a.age - b.age);
};

console.log(nameAndAge(books));
