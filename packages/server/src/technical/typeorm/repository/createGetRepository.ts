import { ObjectType, getCustomRepository } from 'typeorm';

export function createGetRepository<T>(name: ObjectType<T>): () => T {
  return () => getCustomRepository(name);
}
