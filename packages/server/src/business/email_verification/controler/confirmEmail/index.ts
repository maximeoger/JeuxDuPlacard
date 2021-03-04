import ControllerInterface from '../../../../technical/controller/controllerInterface';
import { getEmailVerificationRepository } from '../../repository/emailVerification';
import { getUserRepository } from '../../../user/repository/user';


const confirmEmailController: ControllerInterface<void> = async function EmailVerificationGetController(req, res) {
  const emailVerificationRepository = getEmailVerificationRepository();
  const userRepository = getUserRepository();

  const emailVerificationFound = await emailVerificationRepository.findOne({
    where: { id: req.query.verification_id }
  })

  if(!emailVerificationFound){
    throw new Error('provided verification key does not relate to any existing verification.')
  }

  console.log(emailVerificationFound)

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

  userRepository.save(userRelatedToEmailVerification);
  emailVerificationRepository.save(emailVerificationFound);

  res.status(204);
}

export default confirmEmailController;
