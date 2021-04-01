import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import { useRouter } from 'next/router'
import { IUserResponse } from 'common/src/business/user';
import { UserCredentials } from 'common/src/business/user/types/login';
import { UserRegisterData } from 'common/src/business/user/types/register';
import { RecoverPassword } from 'common/src/business/user/types/recoverPassword';
import { login, register, recoverPassword } from 'business/User/state/services/api';
import { IUserRecoverPasswordResponse } from 'common/src/business/user';

interface IUserContext {
  user: IUserResponse | null;
  userIsLoggedIn: boolean;
  connectUser: (data: UserCredentials) => void;
  registerUser: (data: UserRegisterData) => void;
  sendUserEmailForPasswordRetrieval: (data: RecoverPassword) => Promise<IUserRecoverPasswordResponse> | void;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  userIsLoggedIn: false,
  connectUser: () => {},
  registerUser: () => {},
  sendUserEmailForPasswordRetrieval: () => {}
});

function useUserStateProvider() {
  const [user, setUser] = useState<IUserResponse | null>(null);
  const router = useRouter();

  const userIsLoggedIn : boolean = useMemo(() => {
    return user !== null;
  }, [user])

  const connectUser = async (data: UserCredentials) => {
    try{
      const loginResponseSuccess = await login(data);
      setUser(loginResponseSuccess);
      router.push('/');
    } catch(err) {
      setUser(null);
    }
  }

  const registerUser = async (data: UserRegisterData) => {
    try{
      const registerResponseSuccess = await register(data);
      setUser(registerResponseSuccess);
      router.push('/account-created');
    } catch(error) {
      setUser(null);
    }
  }

  const sendUserEmailForPasswordRetrieval = async (data: RecoverPassword) => {
    try {
      const responseData = await recoverPassword(data);
      return responseData; 
    }catch(error){
      throw error;
    }
  }

  return {
    user,
    userIsLoggedIn,
    connectUser,
    registerUser,
    sendUserEmailForPasswordRetrieval,
  }
}

export const UserProvider: React.FC = ({children}) => {
  const value = useUserStateProvider();

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext);