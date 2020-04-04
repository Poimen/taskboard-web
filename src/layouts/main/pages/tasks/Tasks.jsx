import React from 'react';
import { useHistory, Link, Route } from 'react-router-dom';
import { Card, Table, Icon, Tag, Avatar, Tabs, Badge } from 'antd';
import './Tasks.css';
import TaskDetails from './task/Details';
import TaskContextHeader from './components/TaskContextHeader';
import TaskList from './components/TaskList';

const { TabPane } = Tabs;

const downArrowIcon = () => (<svg className="fill-current text-black h-4 w-4 block opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" /></svg>);

function Tasks({ match }) {
  return (
    <>
      <TaskContextHeader></TaskContextHeader>

      <Route exact path={`${match.url}`} component={TaskList} />
      <Route exact path={`${match.url}/:id`} component={TaskDetails} />

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
