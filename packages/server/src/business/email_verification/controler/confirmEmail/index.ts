import ControllerInterface from '../../../../technical/controller/controllerInterface';
import { getEmailVerificationRepository } from '../../repository/emailVerification';
import { getUserRepository } from '../../../user/repository/user';
import { getManager } from 'typeorm';

const confirmEmailController: ControllerInterface<void> = async function EmailVerificationGetController(req, res) {
  const emailVerificationRepository = getEmailVerificationRepository();
  const userRepository = getUserRepository();

  const emailVerificationFound = await emailVerificationRepository.findOne({
    where: { id: req.query.verification_id }
  })

  if(!emailVerificationFound){
    throw new Error('provided verification key does not relate to any existing verification.')
  }

  const userRelatedToEmailVerification = await userRepository.findOne({
    id: emailVerificationFound.user.id
  });

  if(!userRelatedToEmailVerification){
    throw new Error('user does not exists');
  }

  if(emailVerificationFound.verified === true){
    throw new Error('this user email has already been verified');
  } 

  userRelatedToEmailVerification.email_confirmed = true;
  emailVerificationFound.verified_at = new Date();
  emailVerificationFound.verified = true;
  emailVerificationFound.user = userRelatedToEmailVerification;

  await getManager().transaction(async entityManager => {
    await entityManager.save(emailVerificationFound);
  })

  res.send("Email successfully verified").status(204);
}

export default confirmEmailController;
