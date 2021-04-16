import { IUserResponse } from 'common/src/business/user';
import { UserEntity } from '../../business/user/entity/user.entity';

const apiExtractor = (user: UserEntity): IUserResponse => ({
  email: user.email,
  firstName: user.firstName,
  lastName: user.lastName,
});

export default apiExtractor;
