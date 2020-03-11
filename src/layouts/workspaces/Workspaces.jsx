import React from 'react';
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

function Workspaces() {
  return (
    <div className="flex flex-col h-screen text-black">
      <div className="flex flex-row items-center justify-between h-12 bg-gray-700 px-6">
        <div className="text-2xl text-white leading-loose tracking-widest">
          <span className="font-bold tracking-widest">TASK</span><span className="font-hairline">BOARD</span>
        </div>
        <div>
          <Button>+ New Workspace</Button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center h-full bg-blue-500">
        <div className="flex flex-col h-full px-6 py-4 w-3/4">
          <div className="flex items-center ml-4">
            {/* <Icon type="star" style={{ fontSize: 18 }} /> */}
            {/* <span className="ml-2 text-lg font-bold">Workspaces</span> */}
          </div>
          <div className="flex text-black mt-4">
            <Link to="/dashboard" className="flex flex-col m-2 w-1/4 h-64 shadow-md rounded-md bg-white hover:bg-blue-100">
              <div className="flex flex-row items-start justify-between">
                <div className="flex flex-col justify-between p-4">
                  <div className="font-semibold text-lg tracking-wide">
                    <Icon type="star" style={{ fontSize: 18 }} />
                    <span className="ml-2">Freight Excellence</span>
                  </div>
                  <span className="text-sm tracking-wide text-gray-500">Last updated 9am 22/03/2020</span>
                </div>
              </div>
              {/* <div className="flex flex-col items-center p-4 border-l-2 border-b-2 border-gray-400 border-dotted">
                  <div>
                    <Icon type="star" style={{ fontSize: 18 }} />
                  </div>
                </div> */}
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-3xl text-black tracking-wide">25</span>
                  <span className="text-sm text-gray-500">Oustanding tasks</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Workspaces;
