import { Router } from 'express';
import { createAnnouncementFormValidationConstraints } from 'common/dist/business/announcement/validation/createAnnouncement';
import jsonRequestHandler from '../../../technical/controller/jsonControllerHandler';
import createAnnouncementController from '../controller/createAnnouncement';
import validationHandler from '../../../technical/validation/validationHandler';
import verifyToken from '../../../technical/user/verifyToken';

const announcement = Router();

announcement.route('/create-announcement').post([
  verifyToken,
  validationHandler(createAnnouncementFormValidationConstraints),
  jsonRequestHandler(createAnnouncementController),
]);

export default announcement;
