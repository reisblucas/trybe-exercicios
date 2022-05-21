const express = require('express');

const app = express();

app.use(express.json());

const charactersRoutes = './routes/characters';
app.use('/characters', require(charactersRoutes));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App listening port: ${port}`)
});
//