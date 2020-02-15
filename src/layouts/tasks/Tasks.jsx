import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Table, Button, Icon, Tag } from 'antd';

function Tasks() {
  const columns = [
    {
      title: 'Task',
      dataIndex: 'task',
      key: 'task'
    },
    {
      title: 'Due By',
      dataIndex: 'dueBy',
      key: 'dueBy'
    },
    {
      title: 'Assigned To',
      dataIndex: 'assingedTo',
      key: 'assignedTo'
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: p => (
        <span>
          <Tag color='red'>
            {p.toUpperCase()}
          </Tag>
        </span>
      )
    }
  ];
  const data = [
    {
      key: '1',
      task: 'Something to do...',
      dueBy: '12/12/2020',
      assignedTo: 'AB',
      priority: 'high'
    }
  ];

  const history = useHistory();
  const onRow = (history) => (record, rowIndex) => {
    return {
      onClick: event => {
        console.log(`Clicked - ${JSON.stringify(record)}:${rowIndex}`);
        history.push(`/tasks/${record.key}`);
      }
    };
  };

  return (
    <>
      <div className="mt-4 flex flex-row flex-auto mx-auto justify-between">
        <div>
          <span className="text-4xl text-blue-600">Tasks</span>
        </div>
        <div className="flex items-center justify-end">
          <Button className="mr-2">Filter <Icon type="filter"></Icon></Button>
          <Button icon="check-square" type="primary">Add task</Button>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="flex-auto m-2">
          <Card>High tasks</Card>
        </div>
        <div className="flex-auto m-2">
          <Card>Medium tasks</Card>
        </div>
        <div className="flex-auto m-2">
          <Card>Low Tasks</Card>
        </div>
      </div>
      <Card className="mt-4 shadow">
        <Table columns={columns} dataSource={data} onRow={onRow(history)} />
      </Card>
    </>
  );
}

export default Tasks;
