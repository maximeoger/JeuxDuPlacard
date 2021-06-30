import { createConnection as TypeOrmCreateConnexion, getConnectionOptions, Connection } from 'typeorm';

async function getOptions() {
  const connectionOptions = await getConnectionOptions();
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
