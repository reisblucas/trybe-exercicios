// exercicio 1

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle) // altere a chamada da funcao rectangleArea
  console.log(rectangle[0] * rectangle[1]);
});

// exercicio 2

const sum = (...numbers) => {
  const result = numbers.reduce((acc, number) => acc += number);
  return console.log(result);
};

sum(1, 25, -4, -10, 32, 80);

// exercicio 3

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const personLikes = (obj) => {
  const accessObj = () => {
    const { name, age, likes } = obj;
    return `${name} is ${age} years old and likes ${likes.join(', ')}.`
  };
  const result = accessObj();
  return result;
};

console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// exercicio 4
// exercicio 5
// exercicio 6
// exercicio 7
// exercicio 8
// exercicio 9
