import React from 'react';
import { Card, Tag, Button, Empty } from 'antd';
import { Link } from 'react-router-dom';
import { Icon, TextButton, ContextHeader, ContentName, ContextButtonContainer } from '../../components';
import './Dashboard.css';
import TaskStatusContainer from './components/TaskStatusContainer';

function Dashboard() {
  return (
    <>
      <ContextHeader>
        <ContentName title="Dashboard" subTitle="My Home" iconType="desktop"></ContentName>
        <ContextButtonContainer>
          <TextButton icon="filter">Configure Dashboard</TextButton>
        </ContextButtonContainer>
      </ContextHeader>
      <TaskStatusContainer></TaskStatusContainer>
      <div className="flex items-center justify-between pt-4">
        <div className="flex-auto m-2">
          <Card className="shadow" title={`Tasks for the day | ${5} Overdue tasks`}>
            <div>
              <div className="flex flex-col border-b-2">
                <div className="flex items-center justify-between px-2 my-2 border-l-2 border-red-300">
                  <div className="flex flex-row items-center">
                    <Button className="mr-2" icon="check-circle"></Button>
                    <div className="flex items-center w-full">
                      <div className="flex flex-col ml-2 text-base text-gray-800 font-medium">
                        <span>Check some pricing</span>
                        <div>
                          <Tag color="red">URGENT</Tag>
                          <Tag color="blue">BULK</Tag>
                          <Tag color="green">RAIL</Tag>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="mt-1">
                      <span className="text-gray-500 text-sm font-normal">Last updated a moment ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-2 my-2 border-l-2 border-red-300">
                <div className="flex flex-row items-center">
                  <Button className="mr-2" icon="check-circle"></Button>
                  <div className="flex items-center w-full">
                    <div className="flex flex-col ml-2 text-base text-gray-800 font-medium">
                      <span>Check on transport</span>
                      <div>
                        <Tag color="red">URGENT</Tag>
                        <Tag color="blue">BULK</Tag>
                        <Tag color="green">ROAD</Tag>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="mt-1">
                    <span className="text-gray-500 text-sm font-normal">Last week</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="flex-auto m-2">
          <Card className="shadow" title="Ticket Trends">
            <div className="flex flex-row">
              <div className="w-5/6">
                <Empty></Empty>
              </div>
              <div className="flex flex-col items-start justify-between w-1/6">
                <div className="border-green-500 border-l-2">
                  <div className="flex flex-col items-start justify-between ml-2 px-4 py-2">
                    <span className="text-3xl text-black tracking-wide">25</span>
                    <span className="text-sm text-gray-500">Resolved today</span>
                  </div>
                </div>
                <div className="border-blue-500 border-l-2 mt-3">
                  <div className="flex flex-col items-start justify-between ml-2 px-4 py-2">
                    <span className="text-3xl text-black tracking-wide">2</span>
                    <span className="text-sm text-gray-500">Opened today</span>
                  </div>
                </div>
                <div className="border-red-500 border-l-2 mt-3">
                  <div className="flex flex-col items-start justify-between ml-2 px-4 py-2">
                    <span className="text-3xl text-black tracking-wide">0</span>
                    <span className="text-sm text-gray-500">On hold</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="flex-auto m-2">
          <Card className="shadow" title={<span><Icon type="bell" /> Notifications</span>} icon>
            <div className="flex flex-row items-center justify-start">
              <Button className="mr-2" icon="check-circle"></Button>
              <Link to="/tasks/25">Task #25 has been updated <span className="text-gray-500 text-xs ml-2">(25 March 2020 - 8am)</span></Link>
            </div>
          </Card>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="flex-auto m-2">
          <Card className="shadow" title="Tags">
            <div className="flex flex-row items-center justify-start">
              <Tag color="red">URGENT | 5</Tag>
              <Tag color="blue">BULK | 5</Tag>
              <Tag color="green">RAIL | 4</Tag>
              <Tag color="green">ROAD | 1</Tag>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
