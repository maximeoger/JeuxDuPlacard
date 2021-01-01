

const HOST = process.env.DB_HOST || "localhost";
const PORT =  Number(process.env.DB_PORT) || 5432;
const USER_NAME = process.env.DB_USERNAME || "test";
const PASSWORD = process.env.DB_PASSWORD || "test";
const DATABASE = process.env.DB_NAME || "test";

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
      `dist/business/**/*.entity.js`
   ],
   migrations: [
      `dist/migration/**/*.js`
   ],
   subscribers: [
      `dist/subscriber/**/*.js`
   ]
};

module.exports = ORMConfig;