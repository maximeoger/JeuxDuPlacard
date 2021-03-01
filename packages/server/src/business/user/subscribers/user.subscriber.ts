import { EventSubscriber, EntitySubscriberInterface, InsertEvent } from "typeorm";
import { UserEntity } from '../../user/entity/user.entity';
import { hashPassword } from '../../../technical/user/passwordHandler';
import { createEmailVerificationEntity } from '../../email_verification/entity/email_verification.entity';


@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface {
  async beforeInsert(event: InsertEvent<UserEntity>) {
    return await hashPassword(event.entity);
  }

  async afterInsert(event: InsertEvent<UserEntity>){
    return await createEmailVerificationEntity(event.entity);
  }
}
