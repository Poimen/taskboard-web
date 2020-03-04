import React from 'react';
import { Tabs, Avatar, Icon, Breadcrumb } from 'antd';
import './Details.css';
import Information from './Information';
import Tasks from './Tasks';

const { TabPane } = Tabs;

function ClientDetails() {
  function callback(key) {
    console.log(key);
  }

  return (
    <>
      <div className="p-3 flex flex-row flex-auto mx-auto justify-between bg-white border-b-2 border-gray-300">
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Icon className="text-blue-600" style={{ fontSize: 18 }} type="team"></Icon>
              <span className="text-xl text-blue-600">Clients</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span className="text-xl text-blue-600">Shaun Clark</span>
            </Breadcrumb.Item>
          </Breadcrumb>
          {/* <span className="text-xs text-blue-600"><Icon type="left"></Icon> Back to Clients</span> */}
        </div>
      </div>
      <div className="mx-4">
        <div>
          <div className="flex items-center p-4">
            <div>
              <Avatar size={64} className="">SC</Avatar>
            </div>
            <div className="pl-4">
              <div className="text-black text-2xl">
                Shaun Clark
              </div>
              <div className="text-gray-600 text-xs">
                Boing Boing transport - Senior Manager
              </div>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <div className="">
          <div>
            <Tabs defaultActiveKey="1" animated={false} tabPosition='top' onChange={callback}>
              <TabPane tab="Information" key="1">
                <div className="mt-4">
                  <Information></Information>
                </div>
              </TabPane>
              <TabPane tab="Notes" key="2">
              </TabPane>
              <TabPane tab="Documents" key="3">
              </TabPane>
              <TabPane tab="Tasks" key="4">
                <Tasks></Tasks>
              </TabPane>
              <TabPane tab="Archived Tasks" key="5">
                <Tasks></Tasks>
              </TabPane>
              <TabPane tab="Products" key="6">
                <Tasks></Tasks>
              </TabPane>
              <TabPane tab="Timeline" key="7">
                <Tasks></Tasks>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientDetails;
