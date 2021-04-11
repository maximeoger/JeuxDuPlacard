import { EntityRepository, Repository } from 'typeorm';
import { ItemEntity } from '../entity/item.entity';
import createGetRepository from '../../../technical/typeorm/repository/createGetRepository';

@EntityRepository(ItemEntity)
export class ItemRepository extends Repository<ItemEntity> {
}

export const getItemRepository = createGetRepository(ItemRepository);
