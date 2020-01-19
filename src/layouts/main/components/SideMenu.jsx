import React, { useState } from 'react';
import './SideMenu.css';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import SiderMenuOptionText from './SiderMenuOptionText';

const { Sider } = Layout;

function LogoText(collapsed) {
  return collapsed
    ? <span className="font-bold">TB</span>
    : (<><span className="font-bold tracking-wide">TASK</span><span className="font-hairline">BOARD</span></>);
}

function SideMenu() {
  const [sidebarCollapsed, setSidebarCollapse] = useState(false);
  const location = useLocation();

  return (
    <>
      <Sider className="shadow-lg border-r-2 border-gray-300" collapsible theme="light" collapsed={sidebarCollapsed} onCollapse={() => setSidebarCollapse(prev => !prev)}>
        <div className="logo flex items-center justify-center text-2xl border-b-2 border-gray-300">
          {LogoText(sidebarCollapsed)}
        </div>
        <Menu theme="light" selectedKeys={[location.pathname]} mode="inline">
          <Menu.Item key="/dashboard">
            <SiderMenuOptionText icon="desktop" text="Dashboard"></SiderMenuOptionText>
            <Link to="/dashboard" />
          </Menu.Item>
          <Menu.Item key="/tasks">
            <SiderMenuOptionText icon="check-square" text="Tasks"></SiderMenuOptionText>
            <Link to="/tasks" />
          </Menu.Item>
          <Menu.Item key="/calendar">
            <SiderMenuOptionText icon="calendar" text="Calendar"></SiderMenuOptionText>
            <Link to="/calendar" />
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

export default SideMenu;
