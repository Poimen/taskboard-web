import React from 'react';
import './Main.css';
import { Layout, Breadcrumb, Icon, Avatar, Input, Badge } from 'antd';
import SideMenu from './components/SideMenu';

const { Header, Content } = Layout;
const { Search } = Input;

export default function Main() {
  return (
    <Layout className="min-h-screen">
      <SideMenu></SideMenu>
    </Layout>
  );
}
