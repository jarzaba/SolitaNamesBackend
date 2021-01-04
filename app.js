const express = require('express');
//require('express-async-errors');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const nameRouter = require('./controllers/nameRouter');
const middleware = require('./utils/middleware');

app.use(cors());
app.use(express.json());
morgan.token('req_body', (req, res) => JSON.stringify(req.body));
app.use(morgan('tiny', { skip: (req, res) => req.method === 'POST' }));
app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms :req_body',
    { skip: (req, res) => req.method !== 'POST' }
  )
);

app.use(middleware.requestLogger);
app.use('/api/names', nameRouter);
app.use(middleware.unknownEndpoint);

module.exports = app;
