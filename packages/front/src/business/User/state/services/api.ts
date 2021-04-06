import axios from 'technical/request';
import { IUserRecoverPasswordResponse, IUserResponse } from 'common/src/business/user';
import { UserCredentials } from 'common/src/business/user/types/login';
import { UserRegisterData } from 'common/src/business/user/types/register';
import { RecoverPassword } from 'common/src/business/user/types/recoverPassword';


export async function login(data: UserCredentials) {
  const response = await axios.post<IUserResponse>('/login', data);
  if(response.status !== 200) {
    throw response.data;
  }
  return response.data;
}

export async function register(data: UserRegisterData) {
  const response = await axios.post<IUserResponse>('/register', data);
  if(response.status !== 200) {
    throw response.data;
  }
  return response.data;
}

export async function recoverPassword(data: RecoverPassword) {
  const response = await axios.post<IUserRecoverPasswordResponse>('/password-recover', data);
  if(response.status !== 200) {
    throw response.data;
  }
  return response.data;
}