import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/signin';
import SignUp from './pages/signup';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
