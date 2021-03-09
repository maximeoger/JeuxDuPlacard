import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import { IUserResponse } from 'common/src/business/user';
import { UserCredentials } from 'common/src/business/user/types/login';
import { UserRegisterData } from 'common/src/business/user/types/register';
import { login, register } from 'business/User/state/services/api';

interface IUserContext {
  user: IUserResponse | null;
  userIsLoggedIn: boolean;
  connectUser: (payload: UserCredentials) => void;
  registerUser: (payload: UserRegisterData) => void;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  userIsLoggedIn: false,
  connectUser: () => {},
  registerUser: () => {},
});

function useUserStateProvider() {
  const [user, setUser] = useState<IUserResponse | null>(null);

  const userIsLoggedIn : boolean = useMemo(() => {
    return user !== null;
  }, [user])

  const connectUser = async (payload: UserCredentials) => {
    try{
      const loginResponseSuccess = await login(payload);
      setUser(loginResponseSuccess);
    }catch(err) {
      setUser(null);
    }
  }

  const registerUser = async (payload: UserRegisterData) => {
    try{
      const registerResponseSuccess = await register(payload);
      setUser(registerResponseSuccess);
    } catch(error) {
      setUser(null);
    }
  }

  return {
    user,
    userIsLoggedIn,
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