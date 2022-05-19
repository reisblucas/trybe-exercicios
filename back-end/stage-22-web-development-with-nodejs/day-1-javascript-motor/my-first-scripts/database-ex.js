const fs = require('fs');

const appender = (data) => fs.appendFileSync("database.txt", data);

module.exports = appender;