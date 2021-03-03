import ControllerInterface from '../../../../technical/controller/controllerInterface';
import { getUserRepository } from '../../../../business/user/repository/user';
import { createUserEntity } from '../../entity/user.entity';
import { IUserResponse } from 'common/dist/business/user';
import { createEmailVerificationEntity } from '../../../email_verification/entity/email_verification.entity';
import { apiExtractor } from '../../../../technical/user/apiExtractor';
import { generateToken, TOKEN_MAX_AGE } from '../../../../technical/user/jwtHandler';
import { getManager } from 'typeorm';
import { hashPassword } from '../../../../technical/user/passwordHandler';

const createUserController: ControllerInterface<IUserResponse> = async function UserGetController(req, res) {
  const userRepository = getUserRepository();

  let user = await createUserEntity(req.body);

  const userExists = await userRepository.findOne({
    where: { email: user.email }
  })

  if(userExists) {
    throw new Error('user exist');
  }

  let emailVerification = await createEmailVerificationEntity(user);

  user = await hashPassword(user);

  await getManager().transaction(async entityManager => {
    await entityManager.save(user);
    await entityManager.save(emailVerification);
  })
  
  const responseData = await apiExtractor(user); 
  const access_token = await generateToken(responseData);
  res.cookie('access_token', access_token , { httpOnly: true, maxAge: TOKEN_MAX_AGE });
  
  return responseData;
};

export default createUserController;