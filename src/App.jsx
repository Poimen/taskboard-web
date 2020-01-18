import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from 'components/auth/PrivateRoute';
import Main from 'layouts/main/Main';
import Landing from 'layouts/landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <PrivateRoute exact path='/dashboard' component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
