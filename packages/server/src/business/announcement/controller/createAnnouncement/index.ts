import ControllerInterface from '../../../../technical/controller/controllerInterface';
import { IAnnouncementResponse } from 'common/dist/business/announcement/index';
import { getManager } from 'typeorm';
import BadRequestError from '../../../../technical/Error/utils/badRequestError';
import { getAnnouncementRepository } from '../../repository/announcement';
import { getItemRepository } from '../../../item/repository/item';
import { createAnnouncementEntity } from '../../entity/announcement.entity';

const createAnnouncementController: ControllerInterface<any> = async function AnnouncementPostController(req, res) {
  const itemRepository = getItemRepository();

  const relatedItem = await itemRepository.findOne({
    where: { id: req.body.itemId }
  })

  if(!relatedItem){
    throw new BadRequestError('related item does not exist', 500);
  }

  let newAnnouncement = await createAnnouncementEntity({ 
    item: relatedItem, 
    user: req.body.user,
    description: req.body.description,
    sellingPrice: req.body.sellingPrice,
    condition: req.body.condition  
  });

  await getManager().transaction(async entityManager => {
    await entityManager.save(newAnnouncement);
  })

  return {ok: true};
}

export default createAnnouncementController;