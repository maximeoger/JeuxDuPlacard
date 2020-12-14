import { Router } from 'express';
import { jsonRequestHandler } from '../../../technical/controller/jsonControllerHandler';
import createUserController from '../controler/createUser';
import loginUserController from '../controler/login';
import { validationHandler } from '../../../technical/validation/validationHandler';
import { registerValidationConstraints } from 'common/dist/business/user/validation/register';
import { loginValidationConstraints } from 'common/dist/business/user/validation/login';

const user = Router();

user.route('/register').post([
  validationHandler(registerValidationConstraints),
  jsonRequestHandler(createUserController)
]);

user.route('/login').post([
  validationHandler(loginValidationConstraints),
  jsonRequestHandler(loginUserController)
]);


export default user;