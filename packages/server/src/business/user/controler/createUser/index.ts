import ControllerInterface from '../../../../technical/controller/controllerInterface';
import { getUserRepository } from '../../../../business/user/repository/user';
import { createUserEntity } from '../../entity/user.entity';
import { IUserResponse } from 'common/dist/business/user';
import { apiExtractor } from '../../../../technical/user/apiExtractor';
import { generateToken, TOKEN_MAX_AGE } from '../../../../technical/user/jwtHandler';

const createUserController: ControllerInterface<IUserResponse> = async function UserGetController(req, res) {
  const userRepository = getUserRepository();
  let user = await createUserEntity(req.body);

  const userExists = await userRepository.findOne({
    where: { email: user.email }
  })

  if(userExists) {
    throw new Error('user exist');
  }

  user = await userRepository.save(user);

  const responseData = await apiExtractor(user); 
  const access_token = await generateToken(responseData);
  res.cookie('access_token', access_token , { httpOnly: true, maxAge: TOKEN_MAX_AGE });
  
  return responseData;
};

export default createUserController;