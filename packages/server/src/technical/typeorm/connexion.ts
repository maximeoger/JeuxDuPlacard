import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { createConnection as TypeOrmCreateConnexion, getConnectionOptions, Connection } from 'typeorm';

export default async function createConnection(handleError: (error: Error) => unknown): Promise<Connection> {
  return getConnectionOptions()
    .then(
      (connectionOptions) => {
        console.log(connectionOptions);
        return TypeOrmCreateConnexion(
          {
            poolErrorHandler: handleError,
            extra: {
              max: 1,
            },
            ...connectionOptions,
          },
        );
      },
    )
    .catch((error) => {
      handleError(error);
      throw error;
    });
}
