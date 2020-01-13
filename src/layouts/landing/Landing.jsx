import React from 'react';
import { Button, Input, Icon, Form } from 'antd';
import useAuthValidation from './auth';
import './Landing.css';

function Landing() {
  const [handleChange, handleBlur, handleSubmit, authFormState, authInProgress, authError] = useAuthValidation();

  return (
    <>
      <div className="flex min-h-full flex-col items-center justify-center">
        <div className="flex flex-row w-3/4 shadow-md">
          <div className="flex flex-1 items-center justify-center min-h-full bg-blue-500 flex-col rounded-l-lg">
            <span className="tracking-widest text-white text-6xl font-hairline">Welcome</span>
            {/* <span className="tracking-wide text-white text-6xl font-light">TASK | BOARD</span> */}
          </div>
          <div className="flex flex-1.3 items-center justify-center min-h-full bg-white rounded-r-lg">
            <div className="text-center w-3/4 m-24">
              <span className="tracking-wider text-gray-700 text-4xl font-light">Login</span>
              <div className="mt-12">
                <Form onSubmit={handleSubmit}>
                  <Form.Item>
                    <Input
                      size="large"
                      placeholder="Enter username"
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={authFormState.userName}
                      name="userName"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input.Password
                      size="large"
                      placeholder="Enter password"
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={authFormState.password}
                      name="password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      loading={authInProgress}
                      type="primary"
                      size="large"
                      style={{ width: '100%' }}
                      htmlType="submit">
                      {authInProgress || 'Login'}
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <div className="text-left mt-2">
                <span className="text-red-800 tracking-wide font-bold">{authError && 'Incorrect Username or Password'}<br /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
