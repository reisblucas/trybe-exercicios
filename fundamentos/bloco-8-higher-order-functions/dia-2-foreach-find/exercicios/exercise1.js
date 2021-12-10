const books = require('./exercise');


// Tradicional

// const authorBornIn1947 = (arr) => {
//   let author;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i].author.birthYear === 1947) {
//       author = arr[i].author.name;
//     }
    
//   }
//   console.log(author)
//   return author;
// }

// authorBornIn1947(books);

// Find

const authorBornIn1947 = arr => arr.find( author => author.author.birthYear === 1947);

console.log(authorBornIn1947(books))