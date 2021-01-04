import express from 'express';
import logger from './logger';

const requestLogger = (
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {
  logger.info('Method: ', request.method);
  logger.info('Path: ', request.path);
  logger.info('Body: ', request.body);
  logger.info('...');
  next();
};

const unknownEndpoint = (
  request: express.Request,
  response: express.Response
) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

export default {
  requestLogger,
  unknownEndpoint,
};
