const fs = require('fs');
const numPolarity = require('./numPolarity');

const appender = () => {
  const data = (numPolarity());

  const key = Object.keys(data)[0];
  const msg = `--------------------\nInput: ${key} | Output: ${data[key]}\n`

  try {
    return fs.appendFileSync("database.txt", msg);
  } catch (e) {
    return e;
  }
};

module.exports = appender;