import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthService } from 'services/auth/authService';

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useAuthService();
  const auth = true;

  return (
    <Route
      {...rest}
      render={props =>
        auth ? (
          <Component { ...props } />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
