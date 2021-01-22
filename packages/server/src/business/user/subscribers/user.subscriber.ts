import { EventSubscriber, EntitySubscriberInterface, InsertEvent } from "typeorm";
import { UserEntity } from '../../user/entity/user.entity';
import { hashPassword } from '../../../technical/user/passwordHandler';


@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface {
  async beforeInsert(event: InsertEvent<UserEntity>) {
    return await hashPassword(event.entity);
  }
}