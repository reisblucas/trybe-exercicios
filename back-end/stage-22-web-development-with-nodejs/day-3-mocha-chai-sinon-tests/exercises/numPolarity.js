const rs = require('readline-sync');

const numPolarity = () => {
  const x = rs.questionInt("Insert your number: ");

  if (typeof x !== 'number') { return "Please, insert a number."}
  if (x === 0) { return "It's a neutral number!"; }
  if (x < 0) { return "It's a negative number!"; }
  if (x > 0) { return "It's a positive number!"; }
}

module.exports = numPolarity;