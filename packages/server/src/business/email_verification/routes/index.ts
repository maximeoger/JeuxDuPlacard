import { Router } from 'express';
import confirmEmailController from '../controler/confirmEmail';
import jsonRequestHandler from '../../../technical/controller/jsonControllerHandler';

const emailVerification = Router();

emailVerification.route('/email/verify').get([
  jsonRequestHandler(confirmEmailController),
]);

export default emailVerification;
