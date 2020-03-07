import React from 'react';
import { Avatar, Icon, Button } from 'antd';
import Office from '@svg/Office';

function Details() {
  return (
    <>
      <div className="mx-4">
        <div className="pt-3 pb-2 flex flex-row flex-auto mx-auto justify-between bg-white- border-b-2- border-gray-300">
          <div>
            <div className="flex items-center">
              <Avatar shape="square" size={55} style={{ color: 'grey' }} icon={<Icon component={Office} className="font-base" />}></Avatar>
              <div className="flex flex-col ml-2 text-2xl text-gray-800 font-medium">
                <div>
                  <span className="text-xl text-blue-600">Company</span>
                  <span className="mx-3 text-base text-gray-500">/</span>
                  <span className="text-xl text-blue-600">Boing Boing Transport</span>
                </div>
                <span className="text-gray-500 text-xs font-normal ml-1">Transport company</span>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end">
          </div>
        </div>
      </div>
      <div className="mr-4 ml-4 mt-8">
      </div>
    </>
  );
}

export default Details;
