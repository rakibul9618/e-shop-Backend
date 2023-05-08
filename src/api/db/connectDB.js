import mongoose from 'mongoose';
import config from '../config/config.js';
import logger from '../utils/logger.js';

const devDbUri = `${config.LOCAL_DB}`;
const proDdbUri = `${config.MONGO_URI_PROD}`;
const EnvType = `${config.NODE_ENV}`;

async function connect() {
  try {
    if (EnvType === 'production') {
      await mongoose.connect(proDdbUri);
      logger.info('Production DB Connected');
    } else {
      await mongoose.connect(devDbUri);
      logger.info('Local DB Connected');
    }
  } catch (error) {
    logger.error('Could not Connect to DB');
    process.exit(1);
  }
}

export default connect;
