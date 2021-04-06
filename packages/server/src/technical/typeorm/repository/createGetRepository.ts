import { ObjectType, getCustomRepository } from 'typeorm';

export default function createGetRepository<T>(name: ObjectType<T>): () => T {
  return () => getCustomRepository(name);
}
