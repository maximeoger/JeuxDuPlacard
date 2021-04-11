import {
  Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany,
} from 'typeorm';
import { ItemType, ItemCategory } from 'common/dist/business/item/types/index';
import { AnnouncementEntity } from '../../announcement/entity/announcement.entity';
import IItemEntity from '../types';

@Entity('item')
export class ItemEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  isbnEanCode: string;

  @Column('text')
  name: string;

  @Column('decimal')
  publicPrice: number;

  @Column('text')
  dimensions: string;

  @Column('decimal')
  weight: number;

  @Column('text')
  publisher: string;

  @Column('text')
  category: ItemCategory;

  @Column('text')
  type: ItemType;

  @OneToMany('AnnouncementEntity', 'item', { nullable: true })
  announcements: AnnouncementEntity[];
}

export async function createItem(itemToCreate: IItemEntity): Promise<IItemEntity> {
  const item = new ItemEntity();

  if (itemToCreate.id) {
    item.id = itemToCreate.id;
  }

  return item;
}
