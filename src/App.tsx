import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/signin';
// import SignUp from './pages/signup';
import { AuthProvider } from './hooks/authContext';
import ToastContainer from './components/Toast';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
