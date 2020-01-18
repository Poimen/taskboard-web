import React from 'react';
import { Layout, Breadcrumb, Icon, Avatar, Input, Badge } from 'antd';
import SideMenu from '../main/components/SideMenu';
import './Dashboard.css';

const { Header, Content } = Layout;
const { Search } = Input;

function Dashboard() {
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <SideMenu></SideMenu>
        <Layout>
          <Header style={{ padding: 0 }}>
            <div className="bg-white border-b-2 border-gray-300">
              <div className="mx-auto px-4">
                <div className="flex items-center justify-between py-4-1">
                  <div className="w-3/4">
                    <Search
                      placeholder="Type to search..."
                      onSearch={value => console.log(value)}
                    />
                  </div>
                  <div className="w-auto flex">
                    <div className="-mt-1 mr-5">
                      <Badge count={3} style={{ fontSize: 12 }}>
                        <div className="text-xl">
                          <Icon type="mail" />
                        </div>
                      </Badge>
                    </div>
                    <div className="-mt-1 mr-5">
                      <Badge count="3" style={{ fontSize: 12 }}>
                        <div className="text-xl">
                          <Icon type="bell" />
                        </div>
                      </Badge>
                    </div>
                    <div>
                      <Avatar style={{ color: 'black' }}>RS</Avatar>
                    </div>
                    {/* change to dropdown component */}
                    <div className="block flex items-center ml-2">
                      <span className="text-gray-600 text-xs mr-1">User Name</span>
                      <div>
                        <svg className="fill-current text-gray-600 h-4 w-4 block opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
      </Layout>
    </>
  );
}

export default Dashboard;
