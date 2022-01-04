const books = require('./exercise');

const someBookWasReleaseOnThe80s = (arr) => {
  const result = arr.some((element) => {
    if (element.releaseYear > 1979 && element.releaseYear < 1989) {
      return true;
    }
  });
  return result;
};

console.log(someBookWasReleaseOnThe80s(books));
