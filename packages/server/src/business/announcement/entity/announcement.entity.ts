import {
  BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne, Entity,
} from 'typeorm';
import { AnnouncementItemCondition } from 'common/src/business/announcement/types/index';
import IUserEntity from '../../user/types';
import IItemEntity from '../../item/types';
import IAnnouncementEntity from '../types';

export type NewAnnouncement = {
  user: IUserEntity;
  item: IItemEntity;
  condition: AnnouncementItemCondition;
} & IAnnouncementEntity;

@Entity('announcement')
export class AnnouncementEntity extends BaseEntity implements IAnnouncementEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne('UserEntity', 'user', { eager: true })
  user: IUserEntity;

  @ManyToOne('ItemEntity', 'id')
  item: IItemEntity;

  @Column('text')
  condition: AnnouncementItemCondition;

  @Column('decimal', { name: 'selling_price' })
  sellingPrice: number;

  @Column('text', { nullable: true, name: 'parcel_default_format' })
  parcelDefaultFormat: string;

  @Column('text', { name: 'description' })
  description: string;
}

export async function createAnnouncementEntity(announcementToCreate: NewAnnouncement): Promise<AnnouncementEntity> {
  const announcement = new AnnouncementEntity();

  if (announcementToCreate.id) {
    announcement.id = announcementToCreate.id;
  }

  if (announcementToCreate.parcelDefaultFormat) {
    announcement.parcelDefaultFormat = announcementToCreate.parcelDefaultFormat;
  }

  announcement.user = announcementToCreate.user;
  announcement.item = announcementToCreate.item;
  announcement.condition = announcementToCreate.condition;
  announcement.sellingPrice = announcementToCreate.sellingPrice;
  announcement.description = announcementToCreate.description;

  return announcement;
}
