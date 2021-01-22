import { IUserLoginAndRegisterResponse } from 'common/dist/business/user/index';
import ControllerInterface from '../../../../technical/controller/controllerInterface';
import { getUserRepository } from '../../../../business/user/repository/user';
import { comparePasswords } from '../../../../technical/user/passwordHandler';
import { apiExtractor } from '../../../../technical/user/apiExtractor';
import { generateToken, TOKEN_MAX_AGE } from '../../../../technical/user/jwtHandler';

const loginUserController: ControllerInterface<IUserLoginAndRegisterResponse> = async function UserLoginController(req, res) {
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

  const responseData = await apiExtractor(user);
  const access_token = await generateToken(responseData);
  res.cookie('access_token', access_token , { httpOnly: true, maxAge: TOKEN_MAX_AGE });

  return responseData;
}

export default loginUserController;