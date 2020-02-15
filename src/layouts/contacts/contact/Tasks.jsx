import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Table } from 'antd';

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
      <Card className="mt-8 shadow">
        <Table columns={columns} dataSource={data} onRow={onRow(history)} />
      </Card>
    </>
  );
}

export default Tasks;
