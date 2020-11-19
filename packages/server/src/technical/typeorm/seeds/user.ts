import { query } from 'express';
import { QueryRunner } from 'typeorm';
import { User } from '../../../entity/User';
import { SeedInterface } from './seedInterface';

const users = [
  {
    name: "Toto",
    lastname: "Marcelin",
    age: 14,
  }
];

export class UserSeed implements SeedInterface {
  public async run(queryRunner: QueryRunner): Promise<any> {
    const { connection } = queryRunner;
    const userRepository = connection.getRepository(User);
    await users.map(user => userRepository.create(user));
  }
}