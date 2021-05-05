import { Router } from 'express';
import { createAnnouncementFormValidationConstraints } from 'common/dist/business/announcement/validation/createAnnouncement';
import validationHandler from 'technical/validation/validationHandler';
import verifyToken from 'technical/user/verifyToken';
import jsonRequestHandler from 'technical/controller/jsonControllerHandler';
import createAnnouncementController from '../controller/createAnnouncement';
import getAnnouncementsController from '../controller/getAnnouncements';

const announcement = Router();

announcement.route('/create-announcement').post([
  verifyToken,
  validationHandler(createAnnouncementFormValidationConstraints),
  jsonRequestHandler(createAnnouncementController),
]);

announcement.route('/announcements').get([
  jsonRequestHandler(getAnnouncementsController),
]);

export default announcement;
