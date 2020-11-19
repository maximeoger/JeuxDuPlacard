import { QueryRunner } from 'typeorm';

export interface SeedInterface {
  run(queryRunner: QueryRunner): Promise<any>
};