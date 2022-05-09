// Import askers - local
const { askName, askWeight, askHeight } = require('./imc');
const calcImc = require('./calcImc');
// Appender to save in some database
const appender = require('./database-ex');

// Exec script
const name = askName;
const weight = askWeight;
const height = askHeight;

// Calc IMC
const imc = calcImc(weight, height).toFixed(2);

// Some div
console.log('-----------------------');

// Result message
const msg = `\nName: ${name};\nWeight: ${weight}kg;\nHeigth: ${height}m;\nIMC: ${imc}.\n-----------------------`;

console.log(msg);
appender(msg); // Save data

console.log('Thanks!');
