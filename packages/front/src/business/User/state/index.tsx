import React, {createContext, useContext, useMemo, useState} from 'react';
import { IUserLoginAndRegisterResponse } from 'common/src/business/user';
import { UserCredentials } from 'common/src/business/user/types/login';
import { UserRegisterData } from 'common/src/business/user/types/register';
import { login, register } from 'business/User/state/services/api';

interface IUserContext {
  user: IUserLoginAndRegisterResponse | null;
  connectUser: (payload: UserCredentials) => void;
  registerUser: (payload: UserRegisterData) => void;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  connectUser: () => {},
  registerUser: () => {},
});

function useUserStateProvider() {
  const [user, setUser] = useState<IUserLoginAndRegisterResponse | null>(null);

  const connectUser = async (payload: UserCredentials) => {
    try{
      const loginResponseSuccess = await login(payload);
      setUser(loginResponseSuccess);
      // TODO: extract user data from base64 encoded token
    }catch(err) {
      setUser(null);
    }
  }

  const registerUser = async (payload: UserRegisterData) => {
    try{
      const registerResponseSuccess = await register(payload);
      setUser(registerResponseSuccess);
      // TODO: extract user data from base64 encoded token
    } catch(error) {
      setUser(null);
    }
  }

  return {
    user,
    connectUser,
    registerUser,
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