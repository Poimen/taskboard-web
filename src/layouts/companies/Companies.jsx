import React from 'react';
import { Table, Divider, Tag, Avatar, Button } from 'antd';

function Companies() {
  return (
    <>
      <div className="mt-4 flex flex-row flex-auto mx-auto justify-between">
        <div>
          <span className="text-3xl text-blue-600">Clients</span>
        </div>
        <div className="flex items-center justify-end">
          <Button icon="user-add" type="primary">
            <span>Add contact</span>
          </Button>
        </div>
      </div>
      <Table className="mt-4" columns={columns} dataSource={data} pagination={false} />
    </>
  );
}

export default Companies;
