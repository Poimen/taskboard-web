import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './SideMenu.css';

const { SubMenu } = Menu;
const { Sider } = Layout;

function LogoText(collapsed) {
  return collapsed
    ? <span className="font-bold">TB</span>
    : (<><span className="font-bold tracking-wide">TASK</span><span className="font-hairline">BOARD</span></>);
}

function SideMenu() {
  const [sidebarCollapsed, setSidebarCollapse] = useState(false);

  return (
    <>
      <Sider className="shadow-lg" collapsible theme="light" collapsed={sidebarCollapsed} onCollapse={() => setSidebarCollapse(prev => !prev)}>
        <div className="logo flex items-center justify-center text-2xl">
          {LogoText(sidebarCollapsed)}
        </div>
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
          <Menu.ItemGroup title="Home">
            <Menu.Item key="1">
              <Icon type="desktop" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
          </Menu.ItemGroup>
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

    </>
  );
}

export default SideMenu;
