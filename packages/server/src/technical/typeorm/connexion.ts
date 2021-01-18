import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { createConnection as TypeOrmCreateConnexion, getConnectionOptions, Connection } from 'typeorm';

export async function createConnection(handleError: (error: Error) => unknown): Promise<Connection>{
  return getConnectionOptions()
    .then(connectionOptions => {
      return TypeOrmCreateConnexion({ 
        ...(connectionOptions as PostgresConnectionOptions),
        poolErrorHandler: handleError,
        extra: {
          max: 1
        },
      })
    })
  .catch(error => {
    handleError(error);
    throw error;
  })
}

