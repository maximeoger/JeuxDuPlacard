import { IUserLoginAndRegisterResponse } from 'common/dist/business/user/index';
import ControllerInterface from 'technical/controller/controllerInterface';
import getUserRepository from 'business/user/repository/user';
import { comparePasswords } from 'technical/user/passwordHandler';
import apiExtractor from 'technical/user/apiExtractor';
import BadRequestError from 'technical/Error/utils/badRequestError';
import AuthService from 'technical/auth/services/AuthService';

type UserCredentials = {
  login: string;
  password: string;
};

const loginUserController: ControllerInterface<UserCredentials> = async function UserLoginController(req, res): Promise<any> {
  const authService = AuthService.firebaseInstance;
  const { provider } = authService;

  const { login, password } = req.body;

  try {
    const user = await provider.logIn(login, password);
    // Todo: persister l'utilisateur dans la DB ici, si il n'existe pas ou si il a été modifié
    res.json(user);
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new BadRequestError('USER_NOT_FOUND', 404);
  }
};

export default loginUserController;
