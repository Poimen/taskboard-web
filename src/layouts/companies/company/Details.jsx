import React from 'react';
import { Breadcrumb, Icon } from 'antd';

function Details() {

  return (
    <>
      <div className="p-3 flex flex-row flex-auto mx-auto justify-between bg-white border-b-2 border-gray-300">
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Icon className="text-blue-600" style={{ fontSize: 18 }} type="team"></Icon>
              <span className="text-xl text-blue-600">Company</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span className="text-xl text-blue-600">Boing Boing Transport</span>
            </Breadcrumb.Item>
          </Breadcrumb>
          {/* <span className="text-xs text-blue-600"><Icon type="left"></Icon> Back to Clients</span> */}
        </div>
      </div>
    </>
  );
}

export default Details;
