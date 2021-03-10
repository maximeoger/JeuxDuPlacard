import ControllerInterface from '../../../../technical/controller/controllerInterface';
import { getEmailVerificationRepository } from '../../repository/emailVerification';
import { getUserRepository } from '../../../user/repository/user';
import { getManager } from 'typeorm';
import BadRequestError from '../../../../technical/Error/utils/badRequestError';
import { IEmailVerificationResponse } from 'common/src/business/email_verification/index';

const confirmEmailController: ControllerInterface<IEmailVerificationResponse> = async function EmailVerificationGetController(req, res) {
  const emailVerificationRepository = getEmailVerificationRepository();
  const userRepository = getUserRepository();

  const emailVerificationFound = await emailVerificationRepository.findOne({
    where: { id: req.query.verification_id }
  })

  if(!emailVerificationFound){
    throw new BadRequestError('provided verification key does not relate to any existing verification.', 500);
  }

  const userRelatedToEmailVerification = await userRepository.findOne({
    id: emailVerificationFound.user.id
  });

  if(!userRelatedToEmailVerification){
    throw new BadRequestError('user does not exists', 500);
  }

  if(emailVerificationFound.verified === true){
    throw new BadRequestError('this user email has already been verified', 500);
  } 

  userRelatedToEmailVerification.email_confirmed = true;
  emailVerificationFound.verified_at = new Date();
  emailVerificationFound.verified = true;
  emailVerificationFound.user = userRelatedToEmailVerification;

  await getManager().transaction(async entityManager => {
    await entityManager.save(emailVerificationFound);
  })

  return { succeeded: true, message: 'Email successfully verified.' }
}

export default confirmEmailController;
