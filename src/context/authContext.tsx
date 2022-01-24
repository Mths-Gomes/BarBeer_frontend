import React, { createContext, useMemo, useCallback, useState } from 'react';
import api from '../services/apiClient';

interface AuthState {
  token: string;
  user: object;
}
interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextState {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@BarBeer:token');
    const user = localStorage.getItem('@BarBeer:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });
    // .then((resp) => resp.data)
    // .catch(() => {
    //   console.log('E-mail inválido');
    // });

    const { token, userForResponse } = response.data;

    console.log(token, userForResponse);

    localStorage.setItem('@BarBeer:token', token);
    localStorage.setItem('@BarBeer:user', JSON.stringify(userForResponse));

    setData({ token, user: userForResponse });
  }, []);

  const userContext = useMemo(
    () => ({ user: data.user, signIn }),
    [data.user, signIn],
  );

  return (
    <AuthContext.Provider value={userContext}>{children}</AuthContext.Provider>
  );
};
