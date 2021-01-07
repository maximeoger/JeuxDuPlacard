import { ConnectionOptions } from 'typeorm';
import path from 'path';

const HOST : string = process.env.DB_HOST || "localhost";
const PORT : number =  Number(process.env.DB_PORT) || 5432;
const USER_NAME : string = process.env.DB_USERNAME || "test";
const PASSWORD : string = process.env.DB_PASSWORD || "test";
const DATABASE : string = process.env.DB_NAME || "test";

const fileBaseName : string = path.basename(__filename);
const fileExtention : string = path.extname(fileBaseName);

const ORMConfig = {
   type: "postgres",
   host: HOST,
   port: PORT,
   username: USER_NAME,
   password: PASSWORD,
   database: DATABASE,
   synchronize: true,
   logging: false,
   entities: [
      `src/business/**/*.entity${fileExtention}`
   ],
   migrations: [
      `src/migration/**/*${fileExtention}`
   ]
} as ConnectionOptions;

module.exports = ORMConfig;