import React from 'react';
import { Card, Table, Divider, Tag, Avatar, Button, Icon, Breadcrumb } from 'antd';
import { useHistory } from 'react-router-dom';

function Clients() {
  const columns = [
    {
      title: 'Client',
      dataIndex: 'fullname',
      key: 'fullname',
      render: (text, record) => (
        <div className="flex flex-row flex-auto justify-between items-center">
          <div className="mr-4">
            <Avatar className="text-black">{record.firstName[0]}{record.lastName[0]}</Avatar>
          </div>
          <div className="flex flex-col w-full">
            <div><span className="text-gray-800">{text}</span></div>
            <div><span className="text-gray-600 text-xs">{record.company}</span></div>
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
      render: phones => (<>
        <span>{
          phones.join(', ')
        }</span></>
      ),
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
      title: 'Assigned to',
      key: 'assigned',
      dataIndex: 'assigned',
      sorter: (a, b) => a.assigned.length - b.assigned.length
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
      tags: ['bulk'],
      assigned: 'a'
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      fullname: 'Jim Green',
      company: 'Some Company',
      emails: ['j@brown.com'],
      phones: ['92349732487'],
      tags: ['bulk'],
      assigned: 'b'
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      fullname: 'Joe Black',
      company: 'Some Company',
      emails: ['j@brown.com'],
      phones: ['3459809', '230489034'],
      tags: ['container', 'rail'],
      assigned: 'c'
    }
  ];

  const rowSelection = {
    // Potential actions:
    // Assign (Client owner), delete, create task, (communications subscriptions?)
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name
    })
  };

  const onRow = (history) => (record, rowIndex) => {
    return {
      onClick: event => {
        console.log(`Clicked - ${JSON.stringify(record)}:${rowIndex}`);
        history.push(`/client/${record.key}`);
      }
    };
  };

  // Todo : filter by assigned user

  const history = useHistory();

  return (
    <>
      <div className="p-3 flex flex-row flex-auto mx-auto justify-between bg-white border-b-2 border-gray-300">
        <div className="flex flex-col">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Icon className="text-blue-600" style={{ fontSize: 18 }} type="team"></Icon>
              <span className="text-xl text-blue-600">Clients</span>
            </Breadcrumb.Item>
          </Breadcrumb>
          {/* <span className="text-xl text-blue-600">Clients</span> */}
          {/* <span className="text-xs text-gray-500 ml-4">77 Clients</span> */}
        </div>
        <div className="flex items-center justify-end">
          <Button className="mr-2">Filter <Icon type="filter"></Icon></Button>
          <Button icon="user-add" type="primary">Add client</Button>
        </div>
      </div>
      <div className="mr-4 ml-4">
        <Card className="mt-8 shadow">
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} onRow={onRow(history)} />
        </Card>
      </div>
    </>
  );
}

export default Clients;
