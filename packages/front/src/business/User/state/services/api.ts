import axios from 'technical/request';
import { IUserLoginAndRegisterResponse } from 'common/dist/business/user';
import { UserCredentials } from 'common/dist/business/user/types/login';
import { UserRegisterData } from 'common/dist/business/user/types/register';


export async function login(payload: UserCredentials) {
  const response = await axios.post<IUserLoginAndRegisterResponse>('/login', payload);
  if(response.status !== 200) {
    throw response.data;
  }
  return response.data;
}

export async function register(payload: UserRegisterData) {
  const response = await axios.post<IUserLoginAndRegisterResponse>('/register', payload);
  if(response.status !== 200) {
    throw response.data;
  }
  return response.data;
}