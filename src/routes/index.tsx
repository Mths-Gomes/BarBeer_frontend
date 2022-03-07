import React from 'react';
import { Routes, Route } from 'react-router-dom';

import checkRoute from './checkRoute';
import SignIn from '../pages/signin';
import SignUp from '../pages/signup';
import Dashboard from '../pages/Dashboard';

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={checkRoute(SignIn)} />
    <Route path="/signup" element={checkRoute(SignUp)} />
    <Route path="/dashboard" element={checkRoute(Dashboard, true)} />
  </Routes>
);

export default Router;
