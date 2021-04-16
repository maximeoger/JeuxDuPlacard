import { Router } from 'express';
import { registerValidationConstraints } from 'common/src/business/user/validation/register';
import { loginFormValidationRules } from 'common/src/business/user/validation/login';
import { recoverPasswordFormValidationRules } from 'common/src/business/user/validation/recoverPassord';
import jsonRequestHandler from '../../../technical/controller/jsonControllerHandler';
import createUserController from '../controler/createUser';
import loginUserController from '../controler/login';
import recoverPasswordController from '../controler/recoverPassword';
import validationHandler from '../../../technical/validation/validationHandler';

const user = Router();

user.route('/register').post([
  validationHandler(registerValidationConstraints),
  jsonRequestHandler(createUserController),
]);

user.route('/login').post([
  validationHandler(loginFormValidationRules),
  jsonRequestHandler(loginUserController),
]);

user.route('/password-recover').post([
  validationHandler(recoverPasswordFormValidationRules),
  jsonRequestHandler(recoverPasswordController),
]);

export default user;
