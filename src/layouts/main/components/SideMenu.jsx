import React, { useState } from 'react';
import './SideMenu.css';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import SiderMenuOptionText from './SiderMenuOptionText';
import Chat from '@svg/Chat';
import Office from '@svg/Office';

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
      <Sider className="border-gray-300 border-r-2" collapsible theme="light" collapsed={sidebarCollapsed} onCollapse={() => setSidebarCollapse(prev => !prev)}>
        <div className="logo flex items-center justify-center text-2xl">
          {LogoText(sidebarCollapsed)}
        </div>
        <div className="">
          <Menu theme="light" selectedKeys={[location.pathname]} mode="inline">
            <Menu.Item key="/dashboard">
              <SiderMenuOptionText icon="desktop" text="Dashboard"></SiderMenuOptionText>
              <Link to="/dashboard" />
            </Menu.Item>
            <Menu.Item key="/tasks">
              <SiderMenuOptionText icon="bars" text="Tasks"></SiderMenuOptionText>
              <Link to="/tasks" />
            </Menu.Item>
            <Menu.Item key="/contact">
              <SiderMenuOptionText icon="team" text="Contacts"></SiderMenuOptionText>
              <Link to="/contact" />
            </Menu.Item>
            <Menu.Item key="/company">
              <SiderMenuOptionText svg={Office} text="Companies"></SiderMenuOptionText>
              <Link to="/company" />
            </Menu.Item>
            <Menu.Item key="/thirdparties">
              <SiderMenuOptionText svg={Office} text="Third Parties"></SiderMenuOptionText>
              <Link to="/thirdparties" />
            </Menu.Item>
            <Menu.Item key="/calendar">
              <SiderMenuOptionText icon="calendar" text="Calendar"></SiderMenuOptionText>
              <Link to="/calendar" />
            </Menu.Item>
            <Menu.Item key="/knowledge">
              <SiderMenuOptionText icon="book" text="Knowledge Base"></SiderMenuOptionText>
              <Link to="/knowledge" />
            </Menu.Item>
            <Menu.Item key="/report">
              <SiderMenuOptionText icon="bar-chart" text="Reports"></SiderMenuOptionText>
              <Link to="/report" />
            </Menu.Item>
            <Menu.Item key="/chat">
              <SiderMenuOptionText svg={Chat} text="Chat"></SiderMenuOptionText>
              <Link to="/chat" />
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
    </>
  );
}

export default SideMenu;
