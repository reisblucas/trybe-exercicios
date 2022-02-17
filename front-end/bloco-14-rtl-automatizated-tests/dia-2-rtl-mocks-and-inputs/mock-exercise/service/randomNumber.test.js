// let { randomNumber, capitalizeEntireString, onlyFirstLetter, concatStrings } = require('./functions');

const functions = require('./functions');
jest.mock("./functions");

afterEach(() => jest.clearAllMocks());

test('1-Testing randomNumber() to return 10', () => {
  functions.randomNumber = jest.fn().mockReturnValue(10);
  functions.randomNumber();
  expect(functions.randomNumber).toHaveBeenCalled();
  expect(functions.randomNumber).toHaveBeenCalledTimes(1);
  expect(functions.randomNumber()).toBe(10);
})

test('2-testing implementation', () => {
  functions.randomNumber = jest.fn().mockImplementation((a, b) => a / b)
  expect(functions.randomNumber(10,2)).toBe(5);
  expect(functions.randomNumber).toBeCalledTimes(1);
})

test('3-implementation with three parameters', () => {
  functions.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c)
  expect(functions.randomNumber(1,2,3)).toBe(6);
  expect(functions.randomNumber(2,10,3)).toBe(60);
  
  functions.randomNumber.mockClear();
  functions.randomNumber = jest.fn().mockImplementation((a) => a * 2);
  expect(functions.randomNumber(5)).toBe(10);
})

test('new implementation for the first function', () => {
  // implementation
  functions.capitalizeEntireString = jest.fn().mockImplementation((str) => str.toLowerCase());
  functions.onlyFirstLetter = jest.fn().mockImplementation((str) => str[str.length - 1]);
  functions.concatStrings = jest.fn().mockImplementation((a, b, c) => `${a}${b}${c}`);

  expect(functions.capitalizeEntireString('LUCAS')).toBe('lucas');
  expect(functions.onlyFirstLetter('lucas')).toBe('s');
  expect(functions.concatStrings('a', 'b', 'c')).toBe('abc')

  // restored to original state, not working
  // console.log(functions.capitalizeEntireString('lucas'));
  // expect(functions.capitalizeEntireString('lucas')).toBe('LUCAS');
  
  // functions.onlyFirstLetter.mockClear();
  // expect(functions.onlyFirstLetter('lucas')).toBe('l');
})

test('4 - original state', () => {
  console.log(functions.capitalizeEntireString('LUCAS'))
  functions.capitalizeEntireString = jest.fn().mockReturnValue('LUCAS');
  expect(functions.capitalizeEntireString('lucas')).toBe('LUCAS');

  functions.onlyFirstLetter = jest.fn().mockReturnValue('l');
  expect(functions.onlyFirstLetter('lucas')).toBe('l');

  functions.concatStrings = jest.fn().mockReturnValue('ab');
  expect(functions.concatStrings('a', 'b')).toBe('ab')
});

test('5 - mockFetch to API solved', async () => {
  const dogImage = {
    message: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_24786.jpg',
    status: 'success',
  }

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(dogImage),
  }));

  await global.fetch();
  expect(global.fetch).toHaveBeenCalled();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(dogImage.status).toBe('success');
})

test('5 - mockFetch to API failed', async () => {
  const dogImage = { status: 'error',
  message:
   'No route found for "GET /api/breeds/image/rando" with code: 0',
  code: 404 }

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(dogImage),
  }));

  await global.fetch();
  expect(global.fetch).toHaveBeenCalled();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(dogImage.status).toBe('error');
  expect(dogImage.code).toBe(404);
})




