import ControllerInterface from '../../../../technical/controller/controllerInterface';
import { getUserRepository } from '../../../../business/user/repository/user';
import { createUserEntity, UserEntity } from '../../entity/user.entity';

interface IUserResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
};

const extract = (user: UserEntity): IUserResponse => {
  return {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName
  }
}

const createUserController: ControllerInterface<IUserResponse> = async function UserGetController(req) {
  const userRepository = getUserRepository();
  console.log(req.body)
  let user = createUserEntity(req.body);

  const userExists = await userRepository.findOne({
    where: { email: user.email }
  })

  if(userExists) {
    throw new Error('user exist');
  }

  // Todo : if user.password, encrypt password

  user = await userRepository.save(user);

  return extract(user);
};

export default createUserController;