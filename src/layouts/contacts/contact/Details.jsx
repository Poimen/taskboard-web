import React from 'react';
import { Tabs } from 'antd';
import './Details.css';
import Information from './Information';

const { TabPane } = Tabs;

function ContactDetails() {
  function callback(key) {
    console.log(key);
  }

  return (
    <>
      <div>
        Shaun Clark
      </div>
      <div>
        Something else
        <div>
          <Tabs defaultActiveKey="1" animated={false} tabPosition='top' onChange={callback}>
            <TabPane tab="Information" key="1">
              <Information></Information>
            </TabPane>
            <TabPane tab="Tasks" key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
