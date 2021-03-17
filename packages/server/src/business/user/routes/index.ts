import { Router } from 'express';
import { jsonRequestHandler } from '../../../technical/controller/jsonControllerHandler';
import createUserController from '../controler/createUser';
import loginUserController from '../controler/login';
import recoverPasswordController from '../controler/recoverPassword';
import { validationHandler } from '../../../technical/validation/validationHandler';
import { registerValidationConstraints } from 'common/dist/business/user/validation/register';
import { loginFormValidationRules } from 'common/dist/business/user/validation/login';
import { recoverPasswordFormValidationRules } from 'common/dist/business/user/validation/recoverPassord';

const user = Router();

user.route('/register').post([
  validationHandler(registerValidationConstraints),
  jsonRequestHandler(createUserController)
])

user.route('/login').post([
  validationHandler(loginFormValidationRules),
  jsonRequestHandler(loginUserController),
]);

user.route('/password-recover').post([
  validationHandler(recoverPasswordFormValidationRules),
  jsonRequestHandler(recoverPasswordController),
])

export default user;