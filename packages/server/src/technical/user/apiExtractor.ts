import { IUserResponse } from 'common/dist/business/user';
import { UserEntity } from '../../business/user/entity/user.entity';


export const apiExtractor = (user: UserEntity): IUserResponse => {  
  return {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName
  } 
}