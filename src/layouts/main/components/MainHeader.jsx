import React from 'react';
import { Layout, Icon, Avatar, Badge, Input } from 'antd';

const { Header } = Layout;
const { Search } = Input;

function MainHeader() {
  return (
    <Header className="p-0">
      <div className="h-16 bg-white border-b-2 border-gray-300">
        <div className="px-4">
          <div className="flex items-center justify-between py-4-1 w-full">
            {/* <div className="bg-white text-2xl leading-loose tracking-widest">
              <span className="font-bold tracking-wide">TASK</span><span className="font-hairline">BOARD</span>
            </div> */}
            <div className="w-3/4">
              <Search
                placeholder="Type to search..."
                onSearch={value => console.log(value)}
              />
            </div>
            <div className="w-auto flex items-center">
              <div className="-mt-1 mr-5">
                <Badge count={3} style={{ fontSize: 12 }}>
                  <div className="text-xl">
                    <Icon type="mail" />
                  </div>
                </Badge>
              </div>
              <div className="-mt-1 mr-5">
                <Badge count="3" style={{ fontSize: 12 }}>
                  <div className="text-xl">
                    <Icon type="bell" />
                  </div>
                </Badge>
              </div>
              <div>
                <Avatar style={{ color: 'black' }}>RS</Avatar>
              </div>
              {/* change to dropdown component */}
              <div className="block flex items-center ml-2">
                <span className="text-gray-600 text-xs mr-1">User Name</span>
                <div>
                  <svg className="fill-current text-gray-600 h-4 w-4 block opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default MainHeader;
