import ControllerInterface from '../../../../technical/controller/controllerInterface';
import { getUserRepository } from '../../../../business/user/repository/user';
import { createUserEntity } from '../../entity/user.entity';
import { IUserLoginResponse } from 'common/src/business/user';
import { extract } from '../../../../technical/user/apiExtractor';
import { generateToken } from '../../../../technical/user/jwtHandler';

const createUserController: ControllerInterface<IUserLoginResponse> = async function UserGetController(req) {
  const userRepository = getUserRepository();
  let user = await createUserEntity(req.body);

  const userExists = await userRepository.findOne({
    where: { email: user.email }
  })

  if(userExists) {
    throw new Error('user exist');
  }

  user = await userRepository.save(user);

  const { password, ...userData } = user;

  const accessToken = await generateToken(userData);

  return extract(accessToken);
};

export default createUserController;