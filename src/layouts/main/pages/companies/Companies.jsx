import React from 'react';
import { Avatar, Card, Table, Tag, Button, Icon } from 'antd';
import { useHistory } from 'react-router-dom';
import Office from '@svg/Office';

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

  const history = useHistory();

  const onRow = (history) => (record, rowIndex) => {
    return {
      onClick: event => {
        console.log(`Clicked - ${JSON.stringify(record)}:${rowIndex}`);
        history.push(`/company/${record.key}`);
      }
    };
  };

  return (
    <>
      <div className="mx-4">
        <div className="pt-3 pb-2 flex flex-row flex-auto mx-auto justify-between bg-white- border-b-2- border-gray-300">
          <div>
            <div className="flex items-center">
              <Avatar shape="square" size={55} style={{ color: 'grey' }} icon={<Icon component={Office} className="font-base" />}></Avatar>
              <div className="flex flex-col ml-2 text-2xl text-gray-800 font-medium">
                <span className="text-xl text-blue-600">Companies</span>
                <span className="text-gray-500 text-xs font-normal ml-1">77 companies</span>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end">
            <Button className="mr-2">Filter <Icon type="filter"></Icon></Button>
            <Button icon="usergroup-add" type="primary">Add Company</Button>
          </div>
        </div>
      </div>
      <div className="mr-4 ml-4 mt-8">
        {/* <Card className="mt-8 shadow"> */}
        <Table onRow={onRow(history)} columns={columns} dataSource={data} pagination={false} />
        {/* </Card> */}
      </div>
    </>
  );
}

export default Companies;
