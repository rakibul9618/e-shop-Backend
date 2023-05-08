import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  LOCAL_DB: process.env.LOCAL_DB,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  MONGO_URI_PROD: process.env.MONGO_URI_PROD,
  ACCESSTOKENTTL: '15m',
  REFESHTOKENTTL: '30d',
};

export default config;
