import React, { useState } from 'react';
import './SideMenu.css';
import { Layout, Menu } from 'antd';
import SiderMenuOptionText from './SiderMenuOptionText';

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
      <Sider className="shadow-lg border-r-2 border-gray-300" collapsible theme="light" collapsed={sidebarCollapsed} onCollapse={() => setSidebarCollapse(prev => !prev)}>
        <div className="logo flex items-center justify-center text-2xl border-b-2 border-gray-300">
          {LogoText(sidebarCollapsed)}
        </div>
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <SiderMenuOptionText icon="desktop" text="Dashboard"></SiderMenuOptionText>
          </Menu.Item>
          <Menu.Item key="2">
            <SiderMenuOptionText icon="check-square" text="Tasks"></SiderMenuOptionText>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

export default SideMenu;
