import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne,
} from 'typeorm';
import { UserEntity } from '../../user/entity/user.entity';

@Entity('email_verification')
export class EmailVerificationEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.id, {
    eager: true, cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE',
  })
  user: UserEntity;

  @Column('timestamp', { name: 'verified_at', nullable: true })
  verified_at: Date | null;

  @Column('boolean', { name: 'verified' })
  verified: boolean;
}

export const createEmailVerificationEntity = async (newUser: UserEntity): Promise<EmailVerificationEntity> => {
  const emailVerification = new EmailVerificationEntity();

  emailVerification.user = newUser;
  emailVerification.verified = false;
  emailVerification.verified_at = null;

  return emailVerification;
};
