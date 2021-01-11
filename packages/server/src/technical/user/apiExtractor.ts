import { IUserLoginAndRegisterResponse } from 'common/dist/business/user';

export const extract = (accessToken: string): IUserLoginAndRegisterResponse => {
  return {
    accessToken: accessToken,
  }
}