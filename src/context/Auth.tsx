import React, { createContext, useState, useEffect, useContext } from 'react';
import * as auth from '../service/auth';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../service/api';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@RNAuth:user');
      const storageToken = await AsyncStorage.getItem('@RNAuth:token');
      api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
      }

      loadStorageData();
    }
  }, []);

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);

    /**Enviando o token para o header da requisição */
    api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', response.token);
  }

  async function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, loading: false, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/**Uso deste hook para evitar importações e chamadas do useContext e useContext(AuthContext)
 */
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
