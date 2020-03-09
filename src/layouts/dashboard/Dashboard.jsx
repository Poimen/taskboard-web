import React from 'react';
import { Avatar, Card, Table, Tag, Button, Icon } from 'antd';
import './Dashboard.css';
import TaskSummaryCard from './components/TaskSummaryCard';

function Dashboard() {
  return (
    <>
      <div className="mx-4">
        <div className="pt-3 pb-2 flex flex-row flex-auto mx-auto justify-between bg-white- border-b-2- border-gray-300">
          <div>
            <div className="flex items-center">
              <Avatar shape="square" size={55} style={{ color: 'grey' }} icon={<Icon type="desktop" className="font-base" />}></Avatar>
              <div className="flex flex-col ml-2 text-2xl text-gray-800 font-medium">
                <span className="text-xl text-blue-600">Dashboard</span>
                <span className="text-gray-500 text-xs font-normal ml-1">My Home</span>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end">
            <Button className="mr-2">Configure Dashboard <Icon type="filter"></Icon></Button>
            {/* <Button icon="usergroup-add" type="primary">Add Company</Button> */}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <TaskSummaryCard></TaskSummaryCard>
        <TaskSummaryCard></TaskSummaryCard>
        <TaskSummaryCard></TaskSummaryCard>
        <TaskSummaryCard></TaskSummaryCard>
        <TaskSummaryCard></TaskSummaryCard>
      </div>
      <div className="flex items-center justify-between pt-4">
        <TaskSummaryCard></TaskSummaryCard>
        <TaskSummaryCard></TaskSummaryCard>
      </div>
      <div className="flex items-center justify-between pt-4">
        <TaskSummaryCard></TaskSummaryCard>
      </div>
    </>
  );
}

export default Dashboard;
