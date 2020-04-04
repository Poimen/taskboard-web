import React from 'react';
import { Route } from 'react-router-dom';
import ClientContextHeader from './components/ClientContextHeader';
import ClientList from './components/ClientList';
import ClientDetails from './client/Details';

function Clients() {
  return (
    <>
      <ClientContextHeader></ClientContextHeader>

      <Route exact path='/client' component={ClientList} />
      <Route exact path='/client/:id' component={ClientDetails} />
    </>
  );
}

export default Clients;
