import React, { createContext, useState } from 'react';
import * as auth from '../service/auth';

interface AuthContextData {
  signed: boolean;
  user: object;
  signIn(): Promise<void>;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({});
  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
