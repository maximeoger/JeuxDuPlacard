import { IUserRecoverPasswordResponse } from 'common/dist/business/user/index';
import ControllerInterface from '../../../../technical/controller/controllerInterface';
import sendEmail from '../../../../technical/sendgrid/services/sendEmail';
import BadRequestError from '../../../../technical/Error/utils/badRequestError';
import getUserRepository from '../../repository/user';

const createRecoverPassordController: ControllerInterface<IUserRecoverPasswordResponse> = async function recoverPasswordController(req) {
  const userRepository = getUserRepository();

  const userExists = await userRepository.findOne({
    where: { email: req.body.email },
  });

  if (!userExists) {
    throw new BadRequestError('l\'email spécifié n\'existe pas', 500);
  }

  sendEmail({
    to: userExists.email,
    from: 'maximeoger93@gmail.com',
    template_id: 'd-535e1ab727af43a48204cbb2c6e564c7',
  });

  return {
    recoverPasswordEmailSent: true,
  };
};

export default createRecoverPassordController;
