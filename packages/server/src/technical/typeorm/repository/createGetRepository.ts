import { Repository, ObjectLiteral, EntityTarget } from 'typeorm';
import connection from 'technical/typeorm/connection';

export default function createGetRepository<Entity>(entity: EntityTarget<ObjectLiteral>): () => Repository<ObjectLiteral> {
  return () => connection.getRepository(entity);
}
