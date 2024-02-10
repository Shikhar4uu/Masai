

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authState } = useAuth();

  return (
    <Route {...rest} render={(props) => (
      authState.isAuth === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  );
};

export default PrivateRoute;
