import {
  Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany,
} from 'typeorm';
import { ItemType, ItemCategory } from 'common/src/business/item/types/index';
import { AnnouncementEntity } from '../../announcement/entity/announcement.entity';
import IItemEntity from '../types';

@Entity('item')
export class ItemEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true, name: 'isbn_ean_code' })
  isbnEanCode: string;

  @Column('text', { name: 'name' })
  name: string;

  @Column('decimal', { name: 'public_price' })
  publicPrice: number;

  @Column('text', { name: 'dimensions' })
  dimensions: string;

  @Column('decimal', { name: 'weight' })
  weight: number;

  @Column('text', { name: 'publisher' })
  publisher: string;

  @Column('text', { name: 'category' })
  category: ItemCategory;

  @Column('text', { name: 'type' })
  type: ItemType;

  @OneToMany('AnnouncementEntity', 'item', { nullable: true })
  announcements: AnnouncementEntity[];
}

export async function createItem(itemToCreate: IItemEntity): Promise<IItemEntity> {
  const item = new ItemEntity();

  if (itemToCreate.id) {
    item.id = itemToCreate.id;
  }

  item.isbnEanCode = itemToCreate.isbnEanCode;
  item.name = itemToCreate.name;
  item.publicPrice = itemToCreate.publicPrice;
  item.dimensions = itemToCreate.dimensions;
  item.weight = itemToCreate.weight;
  item.publisher = itemToCreate.publisher;

  return item;
}
