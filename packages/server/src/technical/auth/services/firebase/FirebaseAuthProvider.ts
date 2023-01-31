import { initializeApp } from 'firebase/app';
import AuthProvider, { AuthUser } from 'technical/auth/abstract/AuthProvider';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

class FirebaseAuthProvider implements AuthProvider {
  currentUser: AuthUser;

  initialize(): void {
    initializeApp(firebaseConfig);
  }

  createUser(): Promise<AuthUser> {
    return Promise.resolve(undefined);
  }

  logIn(): Promise<AuthUser> {
    return Promise.resolve(undefined);
  }

  logOut(): void {}

  sendEmailVerification(): void {}
}

export default FirebaseAuthProvider;
