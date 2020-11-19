import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { getConnectionOptions, createConnection as TypeOrmCreateConnexion, Connection } from 'typeorm';

export async function createConnection(handleError: (error: Error) => unknown): Promise<Connection>{

  return getConnectionOptions() 
    .then(connectionOptions => {
      TypeOrmCreateConnexion({
        ...(connectionOptions as  PostgresConnectionOptions)
      })
    }).catch(err => {
      handleError(err);
      throw err;
    }) as unknown as Connection

}