import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import SignIn from '../pages/signin';
import SignUp from '../pages/signup';
import Dashboard from '../pages/Dashboard';

const Router: React.FC = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={!user ? <SignIn /> : <Dashboard />} />
      <Route path="/signup" element={!user ? <SignUp /> : <Dashboard />} />
      <Route
        path="/dashboard"
        element={!user ? <Navigate to="/" /> : <Dashboard />}
      />
    </Routes>
  );
};

export default Router;
