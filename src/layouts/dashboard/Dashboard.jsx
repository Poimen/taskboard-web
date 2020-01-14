import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Avatar } from 'antd';
import './Dashboard.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function LogoText(collapsed) {
  return collapsed
    ? <span className="font-bold">TB</span>
    : (<><span className="font-bold">TASK</span><span className="font-hairline">BOARD</span></>);
}

function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapse] = useState(false);

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={sidebarCollapsed} onCollapse={() => setSidebarCollapse(prev => !prev)}>
          <div className="logo flex items-center justify-center text-2xl tracking-wide">
            {LogoText(sidebarCollapsed)}
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <div class="bg-blue-800">
              <div className="mx-auto px-4">
                <div className="flex items-center md:justify-between py-4">
                  <div className="w-1/4 md:hidden">
                    <svg className="fill-current text-white h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1z" /></svg>
                  </div>
                  <div className="w-1/2 md:w-auto text-center text-white text-2xl font-medium">
                    cointoad
                  </div>
                  <div className="w-1/4 md:w-auto md:flex text-right">
                    <div>
                      <Avatar style={{ color: 'black' }}>RS</Avatar>
                    </div>
                    <div className="hidden md:block md:flex md:items-center ml-2">
                      <span className="text-white text-sm mr-1">User Name</span>
                      <div>
                        <svg className="fill-current text-white h-4 w-4 block opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="w-full flex items-center">
              <div class="w-1/2 md:w-auto text-center text-gray-500 font-medium">
                Search placeholder
              </div>
              <div class="w-1/4 md:w-auto md:flex text-right">
                <div>
                  <img class="inline-block h-8 w-8 rounded-full" src="https://avatars0.githubusercontent.com/u/4323180?s=460&v=4" alt="" />>
                </div>
                <div class="hidden md:block md:flex md:items-center ml-2">
                  <span class="text-white text-sm mr-1">Adam Wathan</span>
                  <div>
                    <svg class="fill-current text-white h-4 w-4 block opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" /></svg>
                  </div>
                </div>
              </div>
              <Avatar className="m-2" />
              <span>sfjkldj</span>
            </div> */}
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default Dashboard;
