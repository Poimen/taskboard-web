import React from 'react';
import { Tabs, Avatar, Icon } from 'antd';
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
          <span className="text-xs text-blue-600"><Icon type="left"></Icon> Back to Clients</span>
        </div>
      </div>
      <div className="mr-4 ml-4">
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
              <TabPane tab="Notes" key="3">
              </TabPane>
              <TabPane tab="Documents" key="4">
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientDetails;
