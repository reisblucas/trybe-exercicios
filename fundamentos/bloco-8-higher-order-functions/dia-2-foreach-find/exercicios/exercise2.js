const books = require('./exercise');

const smallerName = arr => {
  let nameBook;

  let manipulate = 0;
  let indexOfManipulate = 0;
  arr.forEach( (element, index) => {
    const length = element.name.length;
    if (index === 0) {
      manipulate = length;
    }
    if (manipulate > length) {
      manipulate = length;
      indexOfManipulate = index;
    }
  });
  // console.log(manipulate)
  // console.log(indexOfManipulate)
  
  nameBook = Object.values(arr[indexOfManipulate].name.split()).join('')

  return nameBook;
};

console.log(smallerName(books));