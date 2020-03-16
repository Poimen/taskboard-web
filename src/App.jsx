import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from 'components/auth/PrivateRoute';
import Main from 'layouts/main/Main';
import Login from 'layouts/login/Login';
import Workspaces from 'layouts/workspaces/Workspaces';

function App() {
  return (
    <BrowserRouter>
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
