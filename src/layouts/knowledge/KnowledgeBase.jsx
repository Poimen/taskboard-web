import React from 'react';
import { Table, Icon, Button, Input, Tag } from 'antd';
import { useHistory } from 'react-router-dom';

const { Search } = Input;

function KnowledgeBase() {
  const columns = [
    {
      title: 'Document Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Summary',
      dataIndex: 'summary',
      key: 'summary'
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags) => {
        return (
          <span>
            {tags.map(tag => (<Tag color="green">{tag.toUpperCase()}</Tag>))}
          </span>
        );
      }
    }
  ];
  const data = [
    {
      key: '1',
      title: 'Something to know about',
      summary: 'Doing something with Boing Boing Transport, remember this',
      tags: ['BULK']
    }
  ];

  const history = useHistory();
  const onRow = (history) => (record, rowIndex) => {
    return {
      onClick: event => {
        console.log(`Clicked - ${JSON.stringify(record)}:${rowIndex}`);
      }
    };
  };

  const rowSelection = {
    // Potential actions:
    // Assign (contact owner), delete, create task, (communications subscriptions?)
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
      <div className="mt-4 flex flex-row flex-auto mx-auto justify-between">
        <div className="flex flex-col">
          <span className="text-3xl text-blue-600">Knowledge Base</span>
          <span className="text-xs text-gray-500">66 documents</span>
        </div>
        <div className="flex items-center justify-end">
          <Button className="mr-2">Filter <Icon type="filter"></Icon></Button>
          <Button icon="user-add" type="primary">Add document</Button>
        </div>
      </div>
      <div className="mt-4">
        <Search size="small" placeholder="Find document..." onSearch={value => console.log(value)} />
      </div>
      <Table className="mt-4" rowSelection={rowSelection} columns={columns} dataSource={data} onRow={onRow(history)} />
    </>
  );
}

export default KnowledgeBase;
