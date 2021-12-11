const books = require('./exercise');

const everyoneWasBornOnSecXX = (arr) => {
  let result;
  arr.every((element) => {
    result = element.author.birthYear < 1899;
  });
  return result;
};

console.log(everyoneWasBornOnSecXX(books));