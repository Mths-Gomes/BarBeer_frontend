import React, {
  createContext,
  useMemo,
  useCallback,
  useState,
  useContext,
} from 'react';
import api from '../services/apiClient';

interface AuthState {
  token: string;
  user: object;
}
interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

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

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
