import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

function checkRoute(Component: React.FC, isPrivate = false) {
  const { user } = useAuth();

  if (!isPrivate && !!user) {
    return <Navigate to="/dashboard" />;
  }
  if (isPrivate && !user) {
    return <Navigate to="/" />;
  }

  return <Component />;
}

export default checkRoute;
