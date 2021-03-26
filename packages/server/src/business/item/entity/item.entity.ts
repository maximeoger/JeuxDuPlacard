import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ItemType, ItemCategory } from 'common/dist/business/item/types/index';
import { AnnouncementEntity } from '../../announcement/entity/announcement.entity';


export interface IItemEntiry {
  id?: string;
  isbnEanCode: string;
  name: string;
  publicPrice: number;
  dimensions: string;
  weight: number;
  publisher: string;
  category: ItemCategory;
  type: ItemType;
}

@Entity("item")
export class ItemEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text", { unique: true })
  isbn_ean_code: string;

  @Column("text")
  name: string;

  @Column("decimal")
  public_price: number;

  @Column("text")
  dimensions: string;

  @Column("decimal")
  weight: number;

  @Column("text")
  publisher: string;

  @Column("text")
  category: ItemCategory;

  @Column("text")
  type: ItemType;

  @OneToMany(() => AnnouncementEntity, announcement => announcement.item, { nullable: true })
  announcements: AnnouncementEntity[];
}