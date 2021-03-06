import React from 'react';
import { Dropdown, Menu, Button, Icon, Avatar, Badge } from 'antd';
import { Link } from 'react-router-dom';
import DownArrow from '@svg/DownArrow';
import './MainHeader.css';
import { useSelector } from 'react-redux';
import { selectUserName } from 'store/reducers/authenticatedUser/userSelectors';

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/dashboard">
        Add task
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Link to="/dashboard">
        Add customer
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/dashboard">
        Add client
      </Link>
    </Menu.Item>
  </Menu>
);

function MainHeader() {
  const username = useSelector(selectUserName);
  const state = useSelector(state => state);
  console.log(`state = ${JSON.stringify(state, null, 2)}`);

  return (
    <div className="flex h-12 bg-blue-700">
      <div className="px-4 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <div className="text-2xl text-white leading-loose tracking-widest">
              <span className="font-hairline">THE</span><span className="font-bold tracking-widest">TASKING</span><span className="font-hairline">APP</span>
            </div>
            <div className="mainheader--new-dropdown mx-4">
              {/* <Dropdown overlay={menu}>
                <Button ghost className="flex items-center justify-between w-full px-1">
                  <span>Workspaces</span>
                  {DownArrow()}
                </Button>
              </Dropdown> */}
            </div>
          </div>
          <div className="flex items-center">
            {/* <div className="mainheader--new-dropdown mr-4">
              <Dropdown overlay={menu}>
                <Button size="small" ghost>
                  <Icon type="plus" />
                  {DownArrow()}
                </Button>
              </Dropdown>
            </div>
            <div className="mr-4">
              <Badge>
                <div className="text-xl text-white pr-1">
                  <Icon type="check-square" />
                </div>
              </Badge>
            </div>
            <div className="mr-4">
              <Badge count={3} style={{ fontSize: 11 }} dot>
                <div className="text-xl text-white pr-1">
                  <Icon type="mail" />
                </div>
              </Badge>
            </div> */}
            <div className="mr-5">
              <Badge count="3" style={{ fontSize: 14 }} dot={true}>
                <div className="text-xl text-white">
                  <Icon type="bell" />
                </div>
              </Badge>
            </div>
            <div className="-mt-2 pt-1">
              <Avatar style={{ color: 'grey' }}>AG</Avatar>
            </div>
            {/* change to dropdown component */}
            <div className="block flex items-center ml-2 -mt-2">
              <span className="text-white text-xs mr-1">{username}</span>
              <div>
                {DownArrow()}
                {/* <svg className="fill-current text-white h-4 w-4 block opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" /></svg> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
