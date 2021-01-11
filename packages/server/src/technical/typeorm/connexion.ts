import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { createConnection as TypeOrmCreateConnexion, Connection } from 'typeorm';
import { UserEntity } from '../../business/user/entity/user.entity';
import connectionOptions from './utils/connectionOptions';

export async function createConnection(handleError: (error: Error) => unknown): Promise<Connection>{
    return TypeOrmCreateConnexion({ 
      ...(connectionOptions as PostgresConnectionOptions),
      entities: [
        UserEntity
      ],
      migrations: [
        `migration/**/*.js`
      ],
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

