import express from 'express';
import { globalErrorHandler } from './api/errors/globalErrorHandler.js';
import notFound from './api/errors/notFound.js';
import router from './api/routes/index.js';

const app = express();

// api endpoint middleware
app.use(router);

app.get('/health', (_req, res) => {
  res.status(200).json({ message: 'Server is Running Perfectly...🤔🤔🤔' });
});

// not found route
app.get('*', notFound);

// global error handler
app.use(globalErrorHandler);

export default app;
