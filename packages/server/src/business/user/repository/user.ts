import { UserEntity } from '../entity/user.entity';
import createGetRepository from '../../../technical/typeorm/repository/createGetRepository';

const getUserRepository = createGetRepository(UserEntity);

export default getUserRepository;
