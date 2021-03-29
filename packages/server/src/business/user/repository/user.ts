import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { createGetRepository } from '../../../technical/typeorm/repository/createGetRepository';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {}

export const getUserRepository = createGetRepository(UserRepository);
