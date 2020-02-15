import React from 'react';
// import { Layout, Icon, Avatar, Badge, Input } from 'antd';
import { Layout, Icon, Avatar, Badge } from 'antd';

const { Header } = Layout;
// const { Search } = Input;

function MainHeader() {
  return (
    <Header className="p-0">
      <div className="h-16 bg-blue-500 border-b-2 border-gray-300">
        <div className="px-4">
          <div className="flex items-center justify-between py-4-1 w-full">
            <div className="text-2xl text-white leading-loose tracking-widest">
              <span className="font-bold tracking-widest">TASK</span><span className="font-hairline">BOARD</span>
            </div>
            <div className="w-auto flex items-center">
              <div className="mr-5">
                {/* <Search
                  placeholder="Type to search..."
                  onSearch={value => console.log(value)}
                /> */}
              </div>
              <div className="mr-4">
                <Badge count={3} style={{ fontSize: 11 }}>
                  <div className="text-xl text-white pr-1">
                    <Icon type="mail" />
                  </div>
                </Badge>
              </div>
              <div className="mr-5">
                <Badge count="3" style={{ fontSize: 14 }} dot={true}>
                  <div className="text-xl text-white">
                    <Icon type="bell" />
                  </div>
                </Badge>
              </div>
              <div className="-mt-2">
                <Avatar style={{ color: 'black' }}>RS</Avatar>
              </div>
              {/* change to dropdown component */}
              <div className="block flex items-center ml-2 -mt-2">
                <span className="text-white text-xs mr-1">User Name</span>
                <div>
                  <svg className="fill-current text-white h-4 w-4 block opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" /></svg>
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
