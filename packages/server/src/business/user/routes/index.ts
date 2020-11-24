import { Router } from 'express';
import { jsonRequestHandler } from '../../../technical/controller/jsonControllerHandler';
import createUserController from '../controler/createUser';

//import { User } from '../entity/user.entity';

const user = Router();

user.route('/register').post(jsonRequestHandler(createUserController));

export default user;