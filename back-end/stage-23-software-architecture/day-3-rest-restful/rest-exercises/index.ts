import express from "express";
import 'dotenv/config';

import routers from './src/routers/index';

const app = express();

app.use(express.json());

app.use('/rota-da-seda', routers);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`I'm listening you on port ${PORT}`);
});

