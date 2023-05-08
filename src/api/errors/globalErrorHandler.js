import logger from '../utils/logger.js';

export const globalErrorHandler = (err, _req, res) => {
  logger.error(err);
  const status = err.status ? err.status : 500;
  const message = err.message ? err.message : 'Server error occurred';
  res.status(status).json({ message });
};
