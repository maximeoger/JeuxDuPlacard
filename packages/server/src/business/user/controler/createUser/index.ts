import ControllerInterface from '../../../../technical/controller/controllerInterface';
import { getUserRepository } from '../../../../business/user/repository/user';
import { createUserEntity } from '../../entity/user.entity';
import jwt from 'jsonwebtoken';
import { IUserLoginResponse } from 'common/src/business/user';
import { extract } from '../../../../technical/user/apiExtractor';

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

  const tokenSecret: string = process.env.ACCESS_TOKEN_SECRET!

  const {password, ...userData} = user;

  let accessToken = await jwt.sign({...userData}, tokenSecret, {
    algorithm: "HS256",
  })

  return extract(accessToken);
};

export default createUserController;