import { IUserLoginAndRegisterResponse } from 'common/dist/business/user/index';
import ControllerInterface from 'technical/controller/controllerInterface';
import getUserRepository from 'business/user/repository/user';
import { comparePasswords } from 'technical/user/passwordHandler';
import apiExtractor from 'technical/user/apiExtractor';
import { generateToken, TOKEN_MAX_AGE } from 'technical/user/jwtHandler';
import BadRequestError from 'technical/Error/utils/badRequestError';
import AuthService from 'technical/auth/services/AuthService';

const loginUserController: any = async function UserLoginController() {
  const authService = AuthService.firebase();
  authService.provider.initialize();
};

export default loginUserController;
