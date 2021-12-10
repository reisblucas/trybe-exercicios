const sum = require('./sum');

describe ('Exercicio 1', () => {
  test('Expect function', () => {
    expect(typeof sum).toBe('function');
  });

  test('Verify error need to be number', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow();
  });
});