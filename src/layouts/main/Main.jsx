import React from 'react';
import './Main.css';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import MainHeader from './components/MainHeader';
import Dashboard from 'layouts/dashboard/Dashboard';
import Tasks from 'layouts/tasks/Tasks';
import TaskDetails from 'layouts/tasks/task/Details';
import Clients from 'layouts/clients/Clients';
import ClientDetails from 'layouts/clients/client/Details';
import Companies from 'layouts/companies/Companies';
import Calendar from 'layouts/calendar/Calendar';
import Vendors from 'layouts/vendors/Vendors';
import KnowledgeBase from 'layouts/knowledge/KnowledgeBase';

const { Content } = Layout;

export default function Main() {
  return (
    <>
      <Layout className="min-h-screen">
        <MainHeader></MainHeader>
        <Layout>
          <SideMenu></SideMenu>
          <Content>
            <Switch>
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/tasks' component={Tasks} />
              <Route exact path='/tasks/:id' component={TaskDetails} />
              <Route exact path='/client' component={Clients} />
              <Route exact path='/client/:id' component={ClientDetails} />
              <Route exact path='/company' component={Companies} />
              <Route exact path='/vendor' component={Vendors} />
              <Route exact path='/calendar' component={Calendar} />
              <Route exact path='/knowledge' component={KnowledgeBase} />
              <Route exact path='/report' component={Calendar} />
              <Route exact path='/chat' component={Calendar} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
