import app from './app.js';
import http from 'http';
import dotenv from 'dotenv';
import logger from './api/utils/logger.js';
import connect from './api/db/connectDB.js';

dotenv.config();
const server = http.createServer(app);

// SERVER CONNECTION PORT
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  logger.info(`Server is Running at http://localhost:${PORT}`);
  connect();
});
