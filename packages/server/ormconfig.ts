const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;
const USER_NAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE = process.env.DB_NAME;

const connectionOptions = {
   type: "postgres",
   host: HOST,
   port: PORT,
   username: USER_NAME,
   password: PASSWORD,
   database: DATABASE,
   synchronize: true,
   logging: false,
   entities: [
     'dist/server/src/business/**/*.entity.js'
   ],
   subscribers: [
     'dist/server/src/business/**/*.subscriber.js'
   ]
};

module.exports = connectionOptions;