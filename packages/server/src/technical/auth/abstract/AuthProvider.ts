import { UserCredential } from 'firebase/auth';

export type AuthUser = UserCredential;

interface AuthProvider {
  createUser(): void;
  logOut(): void;
  sendEmailVerification(): void;
}

export default AuthProvider;
