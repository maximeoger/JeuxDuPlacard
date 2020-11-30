import { Router } from 'express';
import { jsonRequestHandler } from '../../../technical/controller/jsonControllerHandler';
import createUserController from '../controler/createUser';

const user = Router();

user.route('/register').post(jsonRequestHandler(createUserController));

export default user;