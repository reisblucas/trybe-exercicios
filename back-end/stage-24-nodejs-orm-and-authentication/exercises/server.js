require('dotenv').config()
const express = require('express');

const app = express();
app.use(express.json());

app.use('/', require('./src/routers'));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`I'm listening you in port ${PORT}, buddy!`);
});