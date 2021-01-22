import bcrypt from 'bcrypt';
import { UserEntity } from '../../business/user/entity/user.entity';

export const hashPassword = async (entity: UserEntity): Promise<void> => {
  const hashedPassword = await bcrypt.hash(entity.password, 10);
  entity.password = hashedPassword;
}

export const comparePasswords = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash)
}