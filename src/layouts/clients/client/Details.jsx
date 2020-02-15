import React from 'react';
import { Tabs, Avatar } from 'antd';
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
              Boing Boing transport
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Tabs defaultActiveKey="1" animated={false} tabPosition='top' onChange={callback}>
            <TabPane tab="Information" key="1">
              <Information></Information>
            </TabPane>
            <TabPane tab="Tasks" key="2">
              <Tasks></Tasks>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default ClientDetails;
