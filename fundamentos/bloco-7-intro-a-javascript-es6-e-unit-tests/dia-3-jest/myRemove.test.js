const myRemove = require('./myRemove');

describe('myRemove() test', () => {
  test('Verify if a function called myRemove exists', () => {
    expect(typeof myRemove).toBe('function');
  });

  test('Returns an expected array: [1, 2, 4]', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).toStrictEqual([1, 2, 4]);
  });

  test('Not return the array: [1, 2, 3, 4]', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 2)).not.toStrictEqual([1, 2, 3, 4]);
  })
});