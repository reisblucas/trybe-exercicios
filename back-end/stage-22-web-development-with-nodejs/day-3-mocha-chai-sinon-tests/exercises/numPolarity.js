const rs = require('readline-sync');

const numPolarity = () => {
  const x = rs.questionInt("Insert your number: ");

  const data = {};
  if (typeof x !== 'number') { data[x] = "Please, insert a number."; }
  if (x === 0) { data[x] = "It's a neutral number!"; }
  if (x < 0) { data[x] = "It's a negative number!"; }
  if (x > 0) { data[x] = "It's a positive number!"; }

  return data;
}

// console.log(numPolarity());

module.exports = numPolarity;