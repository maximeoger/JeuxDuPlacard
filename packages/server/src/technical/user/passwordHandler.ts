import bcrypt from 'bcrypt';
import { UserEntity } from '../../business/user/entity/user.entity';

export const hashPassword = async (entity: UserEntity): Promise<UserEntity> => {
  const hashedPassword = await bcrypt.hash(entity.password, 10);
  entity.password = hashedPassword;
  return entity;
};

export const comparePasswords = async (password: string, hash: string): Promise<boolean> => bcrypt.compare(password, hash);
