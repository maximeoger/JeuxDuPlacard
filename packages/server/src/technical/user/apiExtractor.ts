import { IUserLoginAndRegisterResponse } from 'common/src/business/user';

export const extract = (accessToken: string): IUserLoginAndRegisterResponse => {
  return {
    accessToken: accessToken,
  }
}