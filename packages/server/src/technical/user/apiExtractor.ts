import { UserEntity } from '../../business/user/entity/user.entity';
import { IUserResponse } from 'common/src/business/user';

export const extract = (user: UserEntity, accessToken: string): IUserResponse => {
  return {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    accessToken: accessToken,
  }
}