const myFizzBuzz = (num) => {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzBuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  else {
    throw Error('Number is not divisible by 3 or 5, try another number!');
  };
};

module.exports = myFizzBuzz;