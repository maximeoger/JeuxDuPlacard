import { EntityRepository, Repository } from 'typeorm';
import { EmailVerificationEntity } from '../entity/email_verification.entity'
import { createGetRepository } from '../../../technical/typeorm/repository/createGetRepository';


@EntityRepository(EmailVerificationEntity)
export class EmailVerificationRepository extends Repository<EmailVerificationEntity> {
}

export const getEmailVerificationRepository = createGetRepository(EmailVerificationRepository);