import React, { useState } from 'react';
import './SideMenu.css';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import SiderMenuOptionText from './SiderMenuOptionText';
// import Chat from '@svg/Chat';
import Office from '@svg/Office';

const { Sider } = Layout;

// function LogoText(collapsed) {
//   return collapsed
//     ? <span className="font-bold">TB</span>
//     : (<><span className="font-bold tracking-wide">TASK</span><span className="font-hairline">BOARD</span></>);
// }

function SideMenu() {
  const [sidebarCollapsed, setSidebarCollapse] = useState(false);
  const location = useLocation();

  const selectedKey = location.pathname.split('/')[1];
  console.log(selectedKey)
  console.log(location.pathname)
  console.log(location.pathname.split('/'))

  return (
    <>
      <Sider className="border-gray-300 border-r-1 bg-gray-menu" collapsible theme="light" collapsed={sidebarCollapsed} onCollapse={() => setSidebarCollapse(prev => !prev)}>
        {/* <div className="logo flex items-center justify-center text-2xl">
          {LogoText(sidebarCollapsed)}
        </div> */}
        <div className="">
          <Menu theme="light" selectedKeys={[selectedKey]} mode="vertical">
            <Menu.Item key="dashboard">
              <SiderMenuOptionText icon="desktop" text="Dashboard"></SiderMenuOptionText>
              <Link to="/dashboard" />
            </Menu.Item>
            <Menu.Item key="tasks">
              <SiderMenuOptionText icon="bars" text="Tasks"></SiderMenuOptionText>
              <Link to="/tasks" />
            </Menu.Item>
            <Menu.Item key="client">
              <SiderMenuOptionText icon="team" text="Clients"></SiderMenuOptionText>
              <Link to="/client" />
            </Menu.Item>
            <Menu.Item key="company">
              <SiderMenuOptionText svg={Office} text="Companies"></SiderMenuOptionText>
              <Link to="/company" />
            </Menu.Item>
            {/* <Menu.Item key="vendors">
              <SiderMenuOptionText svg={Office} text="Vendors"></SiderMenuOptionText>
              <Link to="/vendors" />
            </Menu.Item> */}
            {/* <Menu.Item key="calendar">
              <SiderMenuOptionText icon="calendar" text="Calendar"></SiderMenuOptionText>
              <Link to="/calendar" />
            </Menu.Item> */}
            {/* <Menu.Item key="knowledge">
              <SiderMenuOptionText icon="book" text="Knowledge Base"></SiderMenuOptionText>
              <Link to="/knowledge" />
            </Menu.Item> */}
            {/* <Menu.Item key="report">
              <SiderMenuOptionText icon="bar-chart" text="Reports"></SiderMenuOptionText>
              <Link to="/report" />
            </Menu.Item> */}
            {/* <Menu.Item key="chat">
              <SiderMenuOptionText svg={Chat} text="Chat"></SiderMenuOptionText>
              <Link to="/chat" />
            </Menu.Item> */}
          </Menu>
        </div>
      </Sider>
    </>
  );
}

export default SideMenu;
