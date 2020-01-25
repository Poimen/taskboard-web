import React from 'react';
import { Table, Tag, Button, Icon } from 'antd';

function Companies() {
  const columns = [
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
      sorter: (a, b) => a.companyName.length - b.companyName.length
    },
    {
      title: 'Assigned to',
      dataIndex: 'assigned',
      key: 'assigned',
      sorter: (a, b) => a.assigned.length - b.assigned.length
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            const color = tag.length > 5 ? 'geekblue' : 'green';
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
      sorter: (a, b) => a.tags[0].length - b.tags[0].length
    }
  ];

  const data = [
    {
      key: '1',
      companyName: 'Some company 1',
      tags: ['bulk']
    },
    {
      key: '2',
      companyName: 'Some company 12',
      tags: ['bulk']
    },
    {
      key: '3',
      companyName: 'Some company 123',
      tags: ['container', 'rail']
    }
  ];

  return (
    <>
      <div className="mt-4 flex flex-row flex-auto mx-auto justify-between">
        <div>
          <span className="text-3xl text-blue-600">Companies</span>
        </div>
        <div className="flex items-center justify-end">
          <Button className="mr-2">Filter <Icon type="filter"></Icon></Button>
          <Button icon="usergroup-add" type="primary">Add Company</Button>
        </div>
      </div>
      <Table className="mt-4" columns={columns} dataSource={data} pagination={false} />
    </>
  );
}

export default Companies;
