// require App from '../App';

let { randomNumber } = require('./01.randomNumber');

afterEach(() => jest.clearAllMocks());

test('Testing randomNumber() to return 10', () => {
  randomNumber = jest.fn().mockReturnValue(10);
  randomNumber();
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber()).toBe(10);
})

test('testing implementation', () => {
  randomNumber = jest.fn().mockImplementation((a, b) => a / b)
  expect(randomNumber(10,2)).toBe(5);
  expect(randomNumber).toBeCalledTimes(1);
})

test('implementation with three parameters', () => {
  randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c)
  expect(randomNumber(1,2,3)).toBe(6);
  expect(randomNumber(2,10,3)).toBe(60);
  
  randomNumber.mockReset();
  randomNumber = jest.fn().mockImplementation((a) => a * 2);
  expect(randomNumber(5)).toBe(10);
})
