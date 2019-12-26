import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './layouts/dashboard/Dashboard';
import Landing from './layouts/landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
