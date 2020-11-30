import { IUserLoginResponse } from 'common/src/business/user';

export const extract = (accessToken: string): IUserLoginResponse => {
  return {
    accessToken: accessToken,
  }
}