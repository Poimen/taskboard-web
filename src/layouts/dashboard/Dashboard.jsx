import React from 'react';
import './Dashboard.css';
import TaskSummaryCard from './components/TaskSuymmaryCard';

function Dashboard() {
  return (
    <>
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
