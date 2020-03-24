import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import './App.css';
import PrivateRoute from 'components/auth/PrivateRoute';
import Main from 'layouts/main/Main';
import Login from 'layouts/login/Login';
import Workspaces from 'layouts/workspaces/Workspaces';
import { useAuthenticationCheck } from 'services/auth/authService';
import { useSelector } from 'react-redux';
import { userAuthenticated } from 'store/reducers/authenticatedUser/userSelectors';

function App() {
  const isAuthenticated = useSelector(userAuthenticated);
  useAuthenticationCheck();

  return (
    <BrowserRouter>
      {isAuthenticated && <Redirect to="/dashboard"></Redirect>}
      <Switch>
        {/* Check if we are logged in then switch the component?? */}
        <Route exact path='/' component={Login} />
        <Route exact path='/workspaces' component={Workspaces} />
        <PrivateRoute path='/' component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
