import { getManager } from 'typeorm';
import ControllerInterface from 'technical/controller/controllerInterface';
import BadRequestError from 'technical/Error/utils/badRequestError';
import { getAnnouncementRepository } from 'business/announcement/repository/announcement';

const getAnnouncementsController: ControllerInterface = async function AnnouncementPostController(req) {
  const announcementRepository = getAnnouncementRepository();

  const announcements = await announcementRepository.find({
    take: Number(req.query.limit),
    skip: Number(req.query.offset),
  });

  return announcements;
};

export default getAnnouncementsController;
