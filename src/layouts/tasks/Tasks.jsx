import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Card, Table, Button, Icon, Tag, Avatar, Tabs, Badge } from 'antd';
import './Tasks.css';

const { TabPane } = Tabs;

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

  function callback(key) {
    console.log(key);
  }

  return (
    <>
      <div className="mx-4">
        <div className="pt-3 pb-2 flex flex-row flex-auto mx-auto justify-between bg-white border-b-2 border-gray-300">
          <div>
            <Icon className="text-blue-600 pr-2" type="bars"></Icon>
            <span className="text-base text-blue-600">Tasks</span>
          </div>
          <div className="flex items-center justify-end">
            <Button className="mr-2">Filter <Icon type="filter"></Icon></Button>
            <Button icon="check-square" type="primary">Add task</Button>
          </div>
        </div>
        <Tabs className="pt-4" defaultActiveKey="1" animated={false} tabPosition='top' onChange={callback}>
          <TabPane tab={
            <div>
              <span className="pr-2">Active Tasks</span>
              <Badge count={25} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }}></Badge>
            </div>
          } key="1">
            <div className="flex flex-col border-b-2">
              <div className="flex border-b-2 p-4 bg-gray-200">
                Some search fields here
              </div>
              <Link to="/tasks/25">
                <div className="flex items-center justify-between mx-2 my-2">
                  <div className="flex items-center">
                    <Avatar shape="square" size={40} style={{ color: 'grey' }}>AS</Avatar>
                    <div className="flex flex-col ml-2 text-base text-gray-800 font-medium">
                      <span>Check some pricing</span>
                      <div>
                        <span className="text-gray-500 text-sm font-normal">#25</span>
                        <span className="text-gray-500 text-sm font-normal"> - </span>
                        <span className="text-gray-500 text-sm font-normal">opened 3 hours ago</span>
                        <span className="text-gray-500 text-sm font-normal"> - </span>
                        <span className="text-gray-500 text-sm font-normal">assigned to Abominable Snowman</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span>Assigned to:</span>
                    <span>Abominable Snowman</span>
                  </div>
                </div>
              </Link>
            </div>
          </TabPane>
          <TabPane tab="Closed Tasks" key="2">
          </TabPane>
          <TabPane tab="All Tasks" key="3">
          </TabPane>
        </Tabs>
      </div>
      {/* <div className="ml-4 mr-4">
        <div className="p-3 flex flex-row flex-auto mx-auto justify-between bg-white border-b-2 border-gray-300">
          <div>
            <Icon className="text-blue-600 pr-2" type="bars"></Icon>
            <span className="text-base text-blue-600">Tasks</span>
          </div>
          <div className="flex items-center justify-end">
            <Button className="mr-2">Filter <Icon type="filter"></Icon></Button>
            <Button icon="check-square" type="primary">Add task</Button>
          </div>
        </div>
      </div>
      <div className="mr-4 ml-4">
        <div className="flex items-center justify-between pt-4">
          <div className="flex-auto m-2 border-l-4 border-red-400 rounded-lg">
            <Card className="rounded-sm">5 High tasks</Card>
          </div>
          <div className="flex-auto m-2 border-l-4 border-green-500 rounded-lg">
            <Card className="rounded-sm">10 Medium tasks</Card>
          </div>
          <div className="flex-auto m-2 border-l-4 border-blue-400 rounded-lg">
            <Card className="rounded-sm">100 Low Tasks</Card>
          </div>
        </div>
        <Card className="mt-4 shadow">
          <Table columns={columns} dataSource={data} onRow={onRow(history)} />
        </Card>
      </div> */}
    </>
  );
}

export default Tasks;
