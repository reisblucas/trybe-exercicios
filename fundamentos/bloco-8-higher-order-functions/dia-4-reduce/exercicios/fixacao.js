// fixacao reduce com filter

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const filtered = numbers.filter((number) => number % 2 === 0);

const sumEven = filtered.reduce((acc, num) => acc + num);

console.log(filtered);
console.log(sumEven);

// Fixacao reduce sem filter e com IF

const sumEvenIf = numbers.reduce((acc, num) => {
  console.log('acumulado: ', acc, 'number: ', num);
  if (num % 2 === 0) {
    return acc + num;
  } else {
    return acc;
  };
});

console.log(sumEvenIf);

// Fixacao reduce sem filter e com ternary operator

const sumEvenTernary = numbers.reduce((acc, num) => num % 2 === 0 ? acc + num : acc);

console.log(sumEvenTernary);
