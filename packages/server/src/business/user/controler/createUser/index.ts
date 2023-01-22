import { IUserResponse } from 'common/dist/business/user';
import connection from 'technical/typeorm/connection';
import ControllerInterface from '../../../../technical/controller/controllerInterface';
import getUserRepository from '../../repository/user';
import { createUserEntity } from '../../entity/user.entity';
import { createEmailVerificationEntity } from '../../../email_verification/entity/email_verification.entity';
import apiExtractor from '../../../../technical/user/apiExtractor';
import { generateToken, TOKEN_MAX_AGE } from '../../../../technical/user/jwtHandler';
import { hashPassword } from '../../../../technical/user/passwordHandler';
import sendEmail from '../../../../technical/sendgrid/services/sendEmail';
import BadRequestError from '../../../../technical/Error/utils/badRequestError';


const createUserController: ControllerInterface<IUserResponse> = async function UserPostController(req, res) {
  const userRepository = getUserRepository();

  let user = await createUserEntity(req.body);

  const userExists = await userRepository.findOne({
    where: { email: user.email },
  });

  if (userExists) {
    throw new BadRequestError('user exist', 500);
  }

  const emailVerification = await createEmailVerificationEntity(user);

  user = await hashPassword(user);

  await connection.transaction(async (entityManager) => {
    await entityManager.save(emailVerification);
  });

  sendEmail({
    to: user.email,
    from: 'support@jeuxduplacard.fr',
    template_id: 'd-4617241110954739adc8300c541dac20',
    dynamic_template_data: {
      first_name: user.firstName,
      verification_id: emailVerification.id,
    },
  });

  const responseData = await apiExtractor(user);
  const accessToken = await generateToken(responseData);
  res.cookie('access_token', accessToken, { httpOnly: true, maxAge: TOKEN_MAX_AGE });

  return responseData;
};

export default createUserController;
