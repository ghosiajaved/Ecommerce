import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = () => {
    return !!localStorage.getItem('token'); // Check for token in local storage
  };

  return isAuthenticated() ? Component : <Navigate to="/login" />;
};

export default PrivateRoute;
