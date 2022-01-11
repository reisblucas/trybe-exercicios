const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// function flatten() {
//   let flattenned = [];
//   arrays.forEach( array => {
//     array.forEach( i => {
//       flattenned.push(i);
//     });
//   });
//   return flattenned;
// };

function flatten() {
  let flattenned = [];
  arrays.forEach( array => {
    array.reduce( (acc, num) => {
      flattenned.push(acc);
    });
  });
  return flattenned;
};

console.log(flatten());