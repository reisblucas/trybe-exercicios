const books = require('./exercise');

const newArray = books.map((book) => book.author.birthYear);

const authorUnique = () => {
  let compare = 0;
  for (let i = 1; i < newArray.length; i += 1) {
    if (compare === 0) {
      compare = newArray[0];
    };
    if (newArray[i] === compare) {
      return true;
    } else {
      compare = newArray[i];
    }
  };
  return false;
};

console.log(authorUnique(books));
