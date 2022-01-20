import React, { useMemo } from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import AuthContext from './context/authContext';

const App: React.FC = () => {
  const userContext = useMemo(() => ({ name: 'Matheus' }), []);

  return (
    <>
      <AuthContext.Provider value={userContext}>
        <SignIn />
      </AuthContext.Provider>

      <GlobalStyle />
    </>
  );
};

export default App;
