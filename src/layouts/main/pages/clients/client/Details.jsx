import React from 'react';
import { Tabs, Avatar, Icon, Breadcrumb } from 'antd';
import './Details.css';
import Information from './Information';
import Tasks from './Tasks';

const { TabPane } = Tabs;

function ClientDetails({ match }) {
  function callback(key) {
    console.log(key);
  }

  return (
    <>
      <div className="mx-4 bg-white pl-6 pr-6 pb-6 pt-4 my-4 mx-4 rounded shadow">
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
