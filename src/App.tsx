import React, { useMemo } from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import { AuthProvider } from './context/authContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
