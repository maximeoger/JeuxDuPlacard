import { EmailVerificationEntity } from '../entity/email_verification.entity';
import createGetRepository from '../../../technical/typeorm/repository/createGetRepository';

const getEmailVerificationRepository = createGetRepository(EmailVerificationEntity);

export default getEmailVerificationRepository;
