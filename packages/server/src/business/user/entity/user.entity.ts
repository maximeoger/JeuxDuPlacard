import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { AnnouncementEntity } from '../../announcement/entity/announcement.entity';

export interface IUserEntity {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  emailConfirmed: boolean;
  announcements?: AnnouncementEntity[]; 
}

@Entity('user')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { name: 'email', unique: true })
  email: string;

  @Column('text', { name: 'first_name' })
  firstName: string;

  @Column('text', { name: 'last_name' })
  lastName: string;

  @Column('text', { name: 'password' })
  password: string;

  @Column('boolean', { name: 'email_confirmed', default: false })
  email_confirmed: boolean;

  @OneToMany(() => AnnouncementEntity, announcement => announcement.user, { nullable: true })
  announcements: AnnouncementEntity[];
}

export async function createUserEntity(userToCreate: IUserEntity): Promise<UserEntity> {
  const user = new UserEntity();

  if (userToCreate.id) {
    user.id = userToCreate.id;
  }

  user.email = userToCreate.email.toLowerCase();
  user.firstName = userToCreate.firstName;
  user.lastName = userToCreate.lastName;
  user.password = userToCreate.password;

  return user;
}
