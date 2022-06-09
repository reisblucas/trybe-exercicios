const express = require('express');

const routers = require('./src/routers/index');

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
const app = express();

app.use(express.json());
app.use(routers);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening port: ${PORT}`);
});