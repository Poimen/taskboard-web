import React from 'react';
import { useHistory } from 'react-router-dom';
import { Table, Button, Icon } from 'antd';

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
    }
  ];
  const data = [
    {
      key: '1',
      task: 'Something to do...',
      dueBy: '12/12/2020',
      assignedTo: 'AB'
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

  return (
    <>
      <div className="mt-4 flex flex-row flex-auto mx-auto justify-between">
        <div>
          <span className="text-3xl text-blue-600">Tasks</span>
        </div>
        <div className="flex items-center justify-end">
          <Button className="mr-2">Filter <Icon type="filter"></Icon></Button>
          <Button icon="check-square" type="primary">Add task</Button>
        </div>
      </div>
      <Table className="mt-4" columns={columns} dataSource={data} onRow={onRow(history)} />
    </>
  );
}

export default Tasks;
