import { EntityRepository, Repository } from 'typeorm';
import createGetRepository from '../../../technical/typeorm/repository/createGetRepository';
import { AnnouncementEntity } from '../entity/announcement.entity';

@EntityRepository(AnnouncementEntity)
export class AnnouncementRepository extends Repository<AnnouncementEntity> {}

export const getAnnouncementRepository = createGetRepository(AnnouncementRepository);
