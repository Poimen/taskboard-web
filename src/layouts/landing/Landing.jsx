import React from 'react';
import './Landing.css';
import { Button, Input, Icon } from 'antd';

function Landing() {
  return (
    <div className="flex flex-row min-h-full">
      <div className="flex flex-1 items-center justify-center min-h-full bg-blue-500 flex-col">
        <span className="tracking-widest text-white text-6xl font-hairline">Welcome</span>
        {/* <span className="tracking-wide text-white text-6xl font-light">TASK | BOARD</span> */}
      </div>
      <div className="flex flex-1.3 items-center justify-center min-h-full shadow-2xl shadow-outline bg-white">
        <div className="text-center">
          <span className="tracking-wider text-gray-700 text-4xl font-light">Login</span>
          <div className="tracking-wider text-gray-700 text-4xl font-light mt-8">
            <Input
              size="large"
              placeholder="Enter username"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
            <Input.Password
              size="large"
              placeholder="Enter password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
            <Button type="primary" size="large" style={{ width: '100%' }} htmlType="submit">Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
