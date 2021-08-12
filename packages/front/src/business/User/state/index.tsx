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
  userMediaVideo: boolean;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  userIsLoggedIn: false,
  connectUser: () => {},
  registerUser: () => {},
  sendUserEmailForPasswordRetrieval: () => {},
  userMediaVideo: false
});

function useUserStateProvider() {
  const [user, setUser] = useState<IUserResponse | null>(null);
  const [userMediaVideo, setUserMediaVideo] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    Promise.resolve(navigator.mediaDevices.getUserMedia({video: true}))
    .then(() => setUserMediaVideo(true))
  }, []);

  const userIsLoggedIn : boolean = useMemo(() => {
    return user !== null;
  }, [user]);

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
    // eslint-disable-next-line
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
    userMediaVideo,
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