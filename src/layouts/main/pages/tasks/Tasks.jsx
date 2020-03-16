import React from 'react';
import { ContextHeader, ContentName, ContextButtonContainer } from '../../components/index';
import { useHistory, Link } from 'react-router-dom';
import { Card, Table, Button, Icon, Tag, Avatar, Tabs, Badge } from 'antd';
import './Tasks.css';

const { TabPane } = Tabs;

const downArrowIcon = () => (<svg className="fill-current text-black h-4 w-4 block opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" /></svg>);

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
      <ContextHeader>
        <ContentName title="Tasks" subTitle="My Tasks" iconType="bars"></ContentName>
        <ContextButtonContainer>
          <Button className="mr-2">Filter <Icon type="filter"></Icon></Button>
          <Button className="mr-2" icon="check-square" type="primary">Add task</Button>
          <Button className="mr-2">Configure Tasks <Icon type="filter"></Icon></Button>
        </ContextButtonContainer>
      </ContextHeader>
      <div className="mx-4">
        <div className="pt-3 pb-2 flex flex-row flex-auto mx-auto justify-between bg-white- border-b-2- border-gray-300">
          <div>
          </div>
          <div className="flex items-end justify-end">
          </div>
        </div>
      </div>
      <div className="mx-4">
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
              <div className="flex items-center justify-between px-2 my-2 border-l-2 border-red-300">
                <Link to="/tasks/25">
                  <div className="flex items-center w-full">
                    <Avatar shape="square" size={40} style={{ color: 'grey' }}>AS</Avatar>
                    <div className="flex flex-col ml-2 text-base text-gray-800 font-medium">
                      <span>Check some pricing</span>
                      <div>
                        <span className="text-gray-500 text-sm font-normal">#25</span>
                        <span className="text-gray-500 text-sm font-normal"> - </span>
                        <span className="text-gray-500 text-sm font-normal">opened 3 hours ago</span>
                        <span className="text-gray-500 text-sm font-normal"> - </span>
                        <span className="text-gray-500 text-sm font-normal">assigned to Abominable Snowman</span>
                        <span className="text-gray-500 text-sm font-normal"> - </span>
                        <span className="text-gray-500 text-sm font-normal">for Boing Boing Transport</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Tag color="red">URGENT</Tag>
                    <Tag color="blue">BULK</Tag>
                    <Tag color="green">RAIL</Tag>
                  </div>
                </Link>
                <div className="flex flex-col">
                  <div className="flex flex-row items-center justify-end">
                    <Badge status="success" text="Open" />
                    {downArrowIcon()}
                  </div>
                  <div className="mt-1 flex flex-row justify-end">
                    <span className="text-sm font-normal">0 of 1 Task completed</span>
                  </div>
                  <div className="mt-1">
                    <span className="text-gray-500 text-sm font-normal">Last updated a moment ago</span>
                  </div>
                </div>
              </div>
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
