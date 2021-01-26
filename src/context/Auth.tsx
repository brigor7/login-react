import React, { createContext } from 'react';
import * as auth from '../service/auth';

interface AuthContextData {
  signed: boolean;
  user: object;
  signIn(): Promise<void>;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  async function signIn() {
    const response = await auth.signIn();
    const { token, user } = response;
    console.log(token);
  }

  return (
    <AuthContext.Provider value={{ signed: false, user: {}, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
