const myFizzBuzz = require('./myFizzBuzz');

describe('myfizzBuzz() Test', () => {
  test('Verify if a function called by myFizzBuzz exists', () => {
    expect(typeof myFizzBuzz).toBe('function');
  });

  test('Return fizzBuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzBuzz');
  });

  test('Return fizz', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });

  test('Return buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  test('Return false if the parameter isNaN', () => {
    expect(myFizzBuzz('a')).toStrictEqual(false);
  });

  test('Return that is not divisible by 3 or 5', () => {
    expect(() => {
      myFizzBuzz(11)
    }).toThrow();
  });
});