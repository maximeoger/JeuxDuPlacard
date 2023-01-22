import IItemEntity from 'business/item/types';
import connection from 'technical/typeorm/connection';
import BadRequestError from 'technical/Error/utils/badRequestError';
import ControllerInterface from '../../../../technical/controller/controllerInterface';
import { getItemRepository } from '../../../item/repository/item';
import { createAnnouncementEntity } from '../../entity/announcement.entity';

const createAnnouncementController: ControllerInterface = async function AnnouncementPostController(req) {
  const itemRepository = getItemRepository();

  const relatedItem = await itemRepository.findOne({
    where: { id: req.body.itemId },
  });

  if (!relatedItem) {
    throw new BadRequestError('related item does not exist', 500);
  }

  const newAnnouncement = await createAnnouncementEntity({
    item: relatedItem as IItemEntity,
    user: req.body.user,
    description: req.body.description,
    sellingPrice: req.body.sellingPrice,
    condition: req.body.condition,
  });

  await connection.transaction(async (entityManager) => {
    await entityManager.save(newAnnouncement);
  });

  return { ok: true };
};

export default createAnnouncementController;
