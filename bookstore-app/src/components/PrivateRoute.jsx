import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  if (!token) {
    return null; // Return null or a loading spinner while redirecting
  }

  return children;
};

export default PrivateRoute;