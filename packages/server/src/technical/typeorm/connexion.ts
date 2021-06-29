import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import {
  createConnection as TypeOrmCreateConnexion, getConnectionOptions, Connection, ConnectionOptions,
} from 'typeorm';

async function getOptions() {
  // this connection option will be used only if a connection string is provided via DATABASE_URL env
  let connectionOptions : ConnectionOptions = {
    type: 'postgres',
    synchronize: false,
    logging: false,
    extra: {
      ssl: true,
    },
    entities: ['dist/business/**/*.entity.js'],
    subscribers: ['dist/business/**/*.subscriber.js'],
  };

  if (process.env.DATABASE_URL) {
    connectionOptions = { ...connectionOptions, url: process.env.DATABASE_URL };
  } else {
    connectionOptions = await getConnectionOptions();
  }
  // const connectionOptions = await getConnectionOptions();

  return connectionOptions;
}

export default async function createConnection(handleError: (error: Error) => unknown): Promise<Connection> {
  return getOptions()
    .then(
      (options) => TypeOrmCreateConnexion(options),
    )
    .catch((error) => {
      handleError(error);
      throw error;
    });
}
