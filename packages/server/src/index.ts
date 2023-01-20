import 'reflect-metadata';
import dotenv from 'dotenv';
import getConnection from 'technical/typeorm/connection';
import app from './app';

dotenv.config();

const connectionOptions = {
  dbPort: Number(process.env.DB_PORT)!,
  host: process.env.DB_HOST!,
  username: process.env.DB_USERNAME!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
};

getConnection(connectionOptions).then(() => {
  app.listen(process.env.API_PORT, () => console.log(`Server listening @ http://localhost:${process.env.API_PORT}`));
}).catch((error : Error) => {
  console.error('Error during Data Source initialization', error);
});
