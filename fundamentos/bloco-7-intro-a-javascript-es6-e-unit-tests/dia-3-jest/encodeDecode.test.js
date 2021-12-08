const {
  encodeFunc: encode,
  decodeFunc: decode,
} = require('./encodeDecode');

describe('encode and decode Test', () => {
  test('Verify if exists a function called by encode', () => {
    expect(typeof encode).toBe('function');
  });

  test('Verify if exists a function called by decode', () => {
    expect(typeof decode).toBe('function');
  });

  test('Vowels trade a', () => {
    expect(encode('a')).toBe('1');
  });

  test('Vowels trade e', () => {
    expect(encode('e')).toBe('2');
  });

  test('Vowels trade i', () => {
    expect(encode('i')).toBe('3');
  });

  test('Vowels trade o', () => {
    expect(encode('o')).toBe('4');
  });

  test('Vowels trade u', () => {
    expect(encode('u')).toBe('5');
  });

  test('Vowels trade A', () => {
    expect(encode('A')).toBe('1');
  });

  test('Vowels trade AEIOU', () => {
    expect(encode('AEIOU')).toBe('12345');
  });

  test('Vowels trade aeiou', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  test('Encode "Eu gosto de abacate!"', () => {
    expect(encode("Eu gosto de abacate!")).toBe('25 g4st4 d2 1b1c1t2!')
  });

  test('Decode 1', () => {
    expect(decode('1')).toBe('a');
  });

  test('Decode 12345', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  test('Length test', () => {
    expect(encode("Eu gosto de abacate!")).toHaveLength(20);
  });
});

