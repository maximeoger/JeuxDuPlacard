import { IUserLoginAndRegisterResponse } from 'common/dist/business/user/index';
import ControllerInterface from '../../../../technical/controller/controllerInterface';
import { getUserRepository } from '../../../../business/user/repository/user';
import { comparePasswords } from '../../../../technical/user/passwordHandler';
import { extract } from '../../../../technical/user/apiExtractor';
import { generateToken } from '../../../../technical/user/jwtHandler';

const loginUserController: ControllerInterface<IUserLoginAndRegisterResponse> = async function UserLoginController(req) {
  const userRepository = getUserRepository();
  
  const user = await userRepository.findOne({
    where: { email: req.body.login }
  });

  if(!user){
    throw new Error('wrong email');
  }

  const passwordIsCorrect = await comparePasswords(req.body.password, user.password);

  if(!passwordIsCorrect){
    throw new Error('wrong password');
  }

  const {password, ...userData} = user;

  const accessToken = await generateToken(userData);

  return extract(accessToken)
}

export default loginUserController;