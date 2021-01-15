import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'express-async-errors';
import { nameRouter } from './controllers/nameRouter';
import middleware from './utils/middleware';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('build'));
app.use(middleware.requestLogger);
app.use('/api/names', nameRouter);
app.use(middleware.unknownEndpoint);

export default app;
