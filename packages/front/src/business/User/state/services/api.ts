import axios from 'technical/request';
import { UserCredentials, IUserLoginResponse } from 'common/dist/business/user';

export async function login(payload: UserCredentials) {
  const response = await axios.post<IUserLoginResponse>('/login', payload);
  if(response.status !== 200) {
    throw response.data;
  }
  return response.data;
}