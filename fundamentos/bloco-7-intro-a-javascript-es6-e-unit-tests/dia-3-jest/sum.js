const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error('Parameters must be numbers');
  }
  return a + b;
};

module.exports = sum;