export type AuthUser = any;

interface AuthProvider {
  currentUser(): Promise<AuthUser>;
  createUser(): Promise<AuthUser>;
  logOut(): void;
  sendEmailVerification(): void;
}

export default AuthProvider;
