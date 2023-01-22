import 'reflect-metadata';
import connection from 'technical/typeorm/connection';
import app from './app';

connection.initialize().then(() => {
  app.listen(process.env.API_PORT, () => console.log(`Server listening @ http://localhost:${process.env.API_PORT}`));
}).catch((error : Error) => {
  console.error('Error during Data Source initialization', error);
});
