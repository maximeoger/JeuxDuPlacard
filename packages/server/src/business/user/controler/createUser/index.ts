import ControllerInterface from '../../../../technical/controller/controllerInterface';
import { getUserRepository } from '../../../../business/user/repository/user';
import { createUserEntity } from '../../entity/user.entity';
import { IUserResponse } from 'common/dist/business/user';
import { bindAccessTokenToUserData } from '../../../../technical/user/apiExtractor';

const createUserController: ControllerInterface<IUserResponse> = async function UserGetController(req) {
  const userRepository = getUserRepository();
  let user = await createUserEntity(req.body);

  const userExists = await userRepository.findOne({
    where: { email: user.email }
  })

  if(userExists) {
    throw new Error('user exist');
  }

  user = await userRepository.save(user);

  return bindAccessTokenToUserData(user)
};

export default createUserController;