import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { createConnection as TypeOrmCreateConnexion, Connection } from 'typeorm';
import connectionOptions from './utils/connectionOptions';

export async function createConnection(handleError: (error: Error) => unknown): Promise<Connection>{
    return TypeOrmCreateConnexion({ 
      ...(connectionOptions as PostgresConnectionOptions),
      poolErrorHandler: handleError,
      extra: {
        max: 1
      },
    })
  .catch(error => {
    handleError(error);
    throw error;
  })
}

