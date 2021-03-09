import { Router } from 'express';
import confirmEmailController from '../controler/confirmEmail';

const emailVerification = Router();

emailVerification.route('/email/verify').get([
  confirmEmailController
])

export default emailVerification;