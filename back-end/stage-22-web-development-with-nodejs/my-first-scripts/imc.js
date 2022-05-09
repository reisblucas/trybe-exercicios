const readfileSync = require('readline-sync');

const askName = readfileSync.question("What is your name? ");
const askWeight = readfileSync.questionFloat("What is your weight? ");
const askHeight = readfileSync.questionFloat("What is your height? ");

module.exports = {
  askName,
  askWeight,
  askHeight,
};
