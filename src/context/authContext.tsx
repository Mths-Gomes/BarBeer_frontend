import React, { createContext, useMemo, useCallback } from 'react';
import api from '../services/apiClient';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextState {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    console.log(response.data);
  }, []);

  const userContext = useMemo(() => ({ name: 'Matheus', signIn }), [signIn]);

  return (
    <AuthContext.Provider value={userContext}>{children}</AuthContext.Provider>
  );
};
