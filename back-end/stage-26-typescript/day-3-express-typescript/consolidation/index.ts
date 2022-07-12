import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
import errorHandler from './src/middlewares/errorHandler';
import { routers } from './src/routers';

const PORT = 8000;

const app: express.Application = express();

app.use(express.json());
app.use(routers);
app.use('/', errorHandler);

app.listen(PORT,
  () => console.log(`I'm listening you in port ${PORT}, my padawan!`)
);

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Express + TypeScript')
});

