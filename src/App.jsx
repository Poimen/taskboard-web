import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import useAuthService from './services/auth/authService';
import './App.css';
import Dashboard from './layouts/dashboard/Dashboard';
import Landing from './layouts/landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

function PrivateRoute({ component: Component, ...rest }) {
  const [isAuthenticated] = useAuthService();

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
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

export default App;
