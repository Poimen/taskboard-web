import React from 'react';
import { Table, Divider, Tag, List, Avatar, Icon } from 'antd';

function Contacts() {
  const columns = [
    {
      title: 'Contact',
      dataIndex: 'fullname',
      key: 'fullname',
      render: (text, record, index) => (
        <div className="flex flex-row flex-auto justify-between items-center">
          <div className="mr-4">
            <Avatar className="text-black">{record.firstName[0]}{record.lastName[0]}</Avatar>
          </div>
          <div className="flex flex-col w-full">
            <div><span>{text}</span></div>
            <div><span className="text-gray-500 text-xs">{record.company}</span></div>
          </div>
        </div>),
      sorter: (a, b) => a.fullname.length - b.fullname.length
    },
    {
      title: 'Email',
      dataIndex: 'emails',
      key: 'emails',
      render: text => (<span>{
        text.join(', ')
      }</span>),
      sorter: (a, b) => a.emails[0].length - b.emails[0].length
    },
    {
      title: 'Phone',
      dataIndex: 'phones',
      key: 'phones',
      render: phones => (<span>{
        phones.join(', ')
      }</span>),
      sorter: (a, b) => a.phones[0].length - b.phones[0].length
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
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a>Invite {record.name}</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      )
    }
  ];

  const data = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      fullname: 'John Brown',
      company: 'Some Company',
      emails: ['j@brown.com'],
      phones: ['123456'],
      tags: ['bulk']
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      fullname: 'Jim Green',
      company: 'Some Company',
      emails: ['j@brown.com'],
      phones: ['92349732487'],
      tags: ['bulk']
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      fullname: 'Joe Black',
      company: 'Some Company',
      emails: ['j@brown.com'],
      phones: ['3459809', '230489034'],
      tags: ['container', 'rail']
    }
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name
    })
  };

  return (
    <>
      <div className="flex flex-row flex-auto">
        <div className="mt-4">
          <span className="text-3xl">Clients</span>
        </div>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </>

  );
}

export default Contacts;
