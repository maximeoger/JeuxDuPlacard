import { EventSubscriber, EntitySubscriberInterface } from 'typeorm';
import { UserEntity } from '../entity/user.entity';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<UserEntity> {}
