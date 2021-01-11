import axios from 'technical/request';
import { IUserResponse} from 'common/src/business/user';
import { UserCredentials } from 'common/src/business/user/types/login';
import { UserRegisterData } from 'common/src/business/user/types/register';


export async function login(payload: UserCredentials) {
  const response = await axios.post<IUserResponse>('/login', payload);
  if(response.status !== 200) {
    throw response.data;
  }
  return response.data;
}

export async function register(payload: UserRegisterData) {
  const response = await axios.post<IUserResponse>('/register', payload);
  if(response.status !== 200) {
    throw response.data;
  }
  return response.data;
}