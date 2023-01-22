import { ObjectLiteral } from 'typeorm';
import { IUserResponse } from 'common/dist/business/user';

const apiExtractor = (user: ObjectLiteral): IUserResponse => ({
  email: user.email,
  firstName: user.firstName,
  lastName: user.lastName,
});

export default apiExtractor;
