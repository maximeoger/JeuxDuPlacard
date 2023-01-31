import FirebaseAuthProvider from 'technical/auth/services/firebase/FirebaseAuthProvider';

class AuthService<AuthProvider> {
  // TODO: fournir un point d'accès global à cette classe
  provider: AuthProvider;

  constructor(provider: AuthProvider) {
    this.provider = provider;
  }

  static firebase(): AuthService<FirebaseAuthProvider> {
    return new AuthService(
      new FirebaseAuthProvider(),
    );
  }
}

export default AuthService;
