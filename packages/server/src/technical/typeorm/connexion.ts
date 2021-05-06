import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { createConnection as TypeOrmCreateConnexion, getConnectionOptions, Connection } from 'typeorm';

export default async function createConnection(handleError: (error: Error) => unknown): Promise<Connection> {
  return getConnectionOptions()
    .then(
      (connectionOptions) => TypeOrmCreateConnexion(
        {
          //            poolErrorHandler: handleError,
          ...connectionOptions,
        },
      ),
    )
    .catch((error) => {
      handleError(error);
      throw error;
    });
}
