import { BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, Entity } from 'typeorm';
import { AnnouncementItemCondition } from 'common/dist/business/announcement/types/index';
import { UserEntity, IUserEntity } from '../../user/entity/user.entity';
import { ItemEntity, IItemEntiry } from '../../item/entity/item.entity';

interface IAnnouncementEntity {
  id?: string;
  user: UserEntity;
  item: ItemEntity;
  condition: AnnouncementItemCondition;
  sellingPrice: number;
  parcelDefaultFormat?: string;
  description: string;
}

@Entity("announcement")
export class AnnouncementEntity extends BaseEntity { 
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => UserEntity, user => user.announcements, { eager: true })
  user: UserEntity;

  @ManyToOne(() => ItemEntity, item => item.id)
  item: ItemEntity;

  @Column("text")
  condition: AnnouncementItemCondition;

  @Column("decimal")
  selling_price: number;

  @Column("text", { nullable: true })
  parcel_default_format: string;

  @Column("text")
  description: string;
}

export async function createAnnouncementEntity(announcementToCreate: IAnnouncementEntity): Promise<AnnouncementEntity> {

  const announcement = new AnnouncementEntity();

  if(announcementToCreate.id) {
    announcement.id = announcementToCreate.id;
  }

  if(announcementToCreate.parcelDefaultFormat){
    announcement.parcel_default_format = announcementToCreate.parcelDefaultFormat;
  }
  
  announcement.user = announcementToCreate.user;
  announcement.item = announcementToCreate.item;
  announcement.condition = announcementToCreate.condition;
  announcement.selling_price = announcementToCreate.sellingPrice;
  announcement.description = announcementToCreate.description;

  return announcement;
}