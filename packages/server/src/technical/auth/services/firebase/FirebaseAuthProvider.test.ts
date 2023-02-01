import { initializeApp } from 'firebase/app';
import FirebaseAuthProvider  from './FirebaseAuthProvider';

jest.mock('firebase/app');

describe('FirebaseAuthProvider', function() {

  const testProviderInstance = new FirebaseAuthProvider();

  it('Should initialize firebase auth services', () => {
    testProviderInstance.initialize()
    expect(initializeApp).toBeCalled()
  })

})