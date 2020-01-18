import React from 'react';
import './Main.css';
import { Layout, Breadcrumb } from 'antd';
import { Route, Switch } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import MainHeader from './components/MainHeader';
import Landing from 'layouts/landing/Landing';

const { Content } = Layout;

export default function Main() {
  return (
    <Layout className="min-h-screen">
      <SideMenu></SideMenu>
      <Layout>
        <MainHeader></MainHeader>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>

          <Switch>
            <Route exact path='/dashboard' component={Landing} />
          </Switch>

        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>
    </Layout>
  );
}
