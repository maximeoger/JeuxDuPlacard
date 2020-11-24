import {ConnectionOptions} from "typeorm";
import path from "path";

const isCompiled = path.extname(__filename).includes('js');

const fileExtension = isCompiled ? "js" : "ts";
export default {
   type: "postgres",
   host: process.env.DB_HOST || "localhost",
   port: Number(process.env.DB_PORT) || 5432,
   username: process.env.DB_USERNAME || "test",
   password: process.env.DB_PASSWORD || "test",
   database: process.env.DB_NAME || "test",
   synchronize: true,
   logging: false,
   entities: [
      `src/business/**/*.entity.${fileExtension}`
   ],
   migrations: [
      `src/migration/**/*.${fileExtension}`
   ],
   subscribers: [
      `src/subscriber/**/*.${fileExtension}`
   ]
} as ConnectionOptions;