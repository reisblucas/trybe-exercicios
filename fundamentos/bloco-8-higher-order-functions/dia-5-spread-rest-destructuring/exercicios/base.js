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

const sum = (...numbers) => console.log(numbers.reduce((acc, number) => acc += number));

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

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = array => {
  const filter = array.filter((element) => element.bornIn < 2000 && element.nationality === 'Australian');
  return console.log(filter);
};

filterPeople(people);

// exercicio 5

const myList = [1, 2, 3];

const fruitList = ['banana', 'maçã', 'pêra'];

const swap = ([x, y, z]) => [z, y, x];

console.log(swap(myList));
console.log(swap(fruitList));

// exercicio 6

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const insert = () => {

};

console.log(carros);

// exercicio 7

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// escreva shipLength abaixo

console.log(shipLength(ships[0]) // 'Titanic is 269.1 meters long'
console.log(shipLength(ships[1]) // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[2]) // 'Yamato is 256 meters long'

// exercicio 8
// exercicio 9
