const encode = (str) => {
  let tradeLetters = {a: '1', e: '2', i: '3', o: '4', u: '5', A: '1', E: '2', I: '3', O: '4', U: '5'};
  let encoded = str.replace(/[aeiou]/gi, function(vowels){return tradeLetters[vowels];})

  return encoded;
};

const decode = (str) => {
  let tradeLetters = {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u'};
  let decoded = str.replace(/[12345]/gi, function(numbers){return tradeLetters[numbers];})

  return decoded;
};

module.exports = {
  encodeFunc: encode,
  decodeFunc: decode,
};