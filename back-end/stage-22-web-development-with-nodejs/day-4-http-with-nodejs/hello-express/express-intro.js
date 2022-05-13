const express = require('express');

const app = express();

const helloWorld = (_, res) => res.status(200).send('Hello World!');
app.get('/hello', helloWorld);

app.listen(3001, () => {
  console.log('App connected to 3001 port!');
});