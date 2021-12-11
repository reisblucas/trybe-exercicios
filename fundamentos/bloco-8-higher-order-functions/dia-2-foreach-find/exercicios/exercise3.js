const books = require('./exercise');

const getNameBook = arr => {
  let nameBook;

  let manipulate = 0;
  let indexOfManipulate = 0;
  arr.forEach( (element, index) => {
    const length = element.name.length;
    if (length === 26) {
      manipulate = length;
      indexOfManipulate = index;
    }
  });
  // console.log(manipulate)
  // console.log(indexOfManipulate)
  
  nameBook = Object.values(arr[indexOfManipulate].name.split()).join('')

  return nameBook;
};

console.log(getNameBook(books));