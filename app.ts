import express from 'express';
//require('express-async-errors');
const app = express();
import cors from 'cors';
import morgan from 'morgan';
import { nameRouter } from './controllers/nameRouter';
import middleware from './utils/middleware';

app.use(cors());
app.use(express.json());
morgan.token('req_body', (req: express.Request, res: express.Response) =>
  JSON.stringify(req.body)
);
app.use(morgan('tiny'));
app.use(express.static('build'));
app.use(middleware.requestLogger);
app.use('/api/names', nameRouter);
app.use(middleware.unknownEndpoint);

export default app;
