const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;
const USER_NAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE = process.env.DB_NAME;

const connectionOptions = [
  {
    type: 'postgres',
    host: HOST,
    port: PORT,
    username: USER_NAME,
    password: PASSWORD,
    database: DATABASE,
    synchronize: true,
    logging: false,
    entities: [
      'src/business/**/*.entity.{js|ts}',
    ],
    subscribers: [
      'src/business/**/*.subscriber.{js|ts}',
    ],
  },
  {
    type: 'postgres',
    host: HOST,
    port: PORT,
    username: USER_NAME,
    password: PASSWORD,
    database: `${DATABASE}-test`,
    synchronize: true,
    logging: false,
    entities: [
      'src/business/**/*.entity.{js|ts}',
    ],
    subscribers: [
      'src/business/**/*.subscriber.{js|ts}',
    ],
  },
];

module.exports = connectionOptions;
