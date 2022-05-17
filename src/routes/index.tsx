import React from 'react';
import { Routes, Route } from 'react-router-dom';

import checkRoute from './checkRoute';
import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={checkRoute(SignIn)} />
    <Route path="/signup" element={checkRoute(SignUp)} />
    <Route path="/dashboard" element={checkRoute(Dashboard, true)} />
    <Route path="/forgot-password" element={checkRoute(ForgotPassword)} />
  </Routes>
);

export default Router;
