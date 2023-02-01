import FirebaseAuthProvider from 'technical/auth/services/firebase/FirebaseAuthProvider';

type Provider = FirebaseAuthProvider;

class AuthService<AuthProvider> {
  provider: AuthProvider;

  private static instance: AuthService<Provider>;

  constructor(provider: AuthProvider) {
    this.provider = provider;
  }

  static get firebaseInstance(): AuthService<FirebaseAuthProvider> {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService(
        new FirebaseAuthProvider(),
      );
      AuthService.instance.provider.initialize();
    }
    return AuthService.instance;
  }
}

export default AuthService;
