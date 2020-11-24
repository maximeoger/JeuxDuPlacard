import ControllerInterface from '../../../../technical/controller/controllerInterface';
import { getUserRepository } from '../../../../business/user/repository/user';
import { createUserEntity } from '../../entity/user.entity';
import jwt from 'jsonwebtoken';
import { IUserResponse } from 'common/src/business/user';
import { extract } from '../../../../technical/user/apiExtractor';

const createUserController: ControllerInterface<IUserResponse> = async function UserGetController(req) {
  const userRepository = getUserRepository();
  let user = createUserEntity(req.body);

  const userExists = await userRepository.findOne({
    where: { email: user.email }
  })

  if(userExists) {
    throw new Error('user exist');
  }

  // Todo : if user.password, encrypt password
  // Todo : set TOKEN_SECRET and TOKEN_LIFE in .env
  let accessToken = await jwt.sign(user.password, "sihdfoijdsoifjsdf", {
    algorithm: "HS256",
  })

  user = await userRepository.save(user);

  return extract(user, accessToken);
};

export default createUserController;