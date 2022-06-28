import * as dotenv from 'dotenv';
import express from 'express';
import errorHandler from './middlewares/errorHandler';
import { routers } from './routers';

dotenv.config();

const app = express();
app.use(express.json());
app.use(routers);

app.use(errorHandler)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});