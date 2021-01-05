import app from './app';
import http from 'http';
import { PORT } from './utils/config';
import logger from './utils/logger';

const server = http.createServer(app);

server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
