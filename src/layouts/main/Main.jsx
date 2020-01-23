import React from 'react';
import './Main.css';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import MainHeader from './components/MainHeader';
import Dashboard from 'layouts/dashboard/Dashboard';
import Tasks from 'layouts/tasks/Tasks';
import Contacts from 'layouts/contacts/Contacts';
import Calendar from 'layouts/calendar/Calendar';

const { Content } = Layout;

export default function Main() {
  return (
    <Layout className="min-h-screen">
      <SideMenu></SideMenu>
      <Layout>
        <MainHeader></MainHeader>
        <Content style={{ margin: '0 16px' }}>
          <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/tasks' component={Tasks} />
            <Route exact path='/client' component={Contacts} />
            <Route exact path='/calendar' component={Calendar} />
            <Route exact path='/knowledge' component={Calendar} />
            <Route exact path='/report' component={Calendar} />
            <Route exact path='/chat' component={Calendar} />
          </Switch>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>
    </Layout>
  );
}
