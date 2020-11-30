import { Router } from 'express';
import { jsonRequestHandler } from '../../../technical/controller/jsonControllerHandler';
import createUserController from '../controler/createUser';
import loginUserController from '../controler/login';

const user = Router();

user.route('/register').post(jsonRequestHandler(createUserController));
user.route('/login').post(jsonRequestHandler(loginUserController));


export default user;