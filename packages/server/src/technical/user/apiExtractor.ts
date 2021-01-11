import { IUserResponse } from 'common/dist/business/user';
import { generateToken } from '../../technical/user/jwtHandler';
import { UserEntity } from '../../business/user/entity/user.entity';


export const bindAccessTokenToUserData = async (user: UserEntity): Promise<IUserResponse> => {
  
  const { password, id, ...userData } = user;
  const accessToken = await generateToken(userData);
  
  return {
    ...userData,
    accessToken
  } 
}