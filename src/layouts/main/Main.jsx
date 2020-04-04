import React from 'react';
import './Main.css';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import SideMenu from './components/sideMenu/SideMenu';
import MainHeader from './components/mainHeader/MainHeader';
import Dashboard from './pages/dashboard/Dashboard';
import Tasks from './pages/tasks/Tasks';
import Clients from './pages/clients/Clients';
import Companies from './pages/companies/Companies';
import CompanyDetails from './pages/companies/company/Details';
import Calendar from './pages/calendar/Calendar';
import Vendors from './pages/vendors/Vendors';
import KnowledgeBase from './pages/knowledge/KnowledgeBase';

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
              <Route path='/tasks' component={Tasks} />
              <Route path='/client' component={Clients} />
              <Route exact path='/company' component={Companies} />
              <Route exact path='/company/:id' component={CompanyDetails} />
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
