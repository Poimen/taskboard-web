import React, { useState, useEffect } from 'react';
import TaskSummaryCard from './TaskSummaryCard';

function useTaskStatuses() {
  const [isLoading, setIsLoading] = useState(true);
  const [totalTasks, setTotalTasks] = useState(0);
  const [unresolvedTasks, setUnresolvedTasks] = useState(0);
  const [tasksDueToday, setTasksDueToday] = useState(0);
  const [openTasks, setOpenTasks] = useState(0);
  const [onHoldTasks, setOnHoldTasks] = useState(0);
  const [unassignedTasks, setUnassignedTasks] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTotalTasks(25);
      setUnresolvedTasks(10);
      setTasksDueToday(5);
      setOpenTasks(7);
      setOnHoldTasks(1);
      setUnassignedTasks(2);

      setIsLoading(false);
    }, 100);
  }, []);

  return {
    isLoading,
    totalTasks,
    unresolvedTasks,
    tasksDueToday,
    openTasks,
    onHoldTasks,
    unassignedTasks
  };
}

function TaskStatusContainer() {
  const {
    totalTasks,
    unresolvedTasks,
    tasksDueToday,
    openTasks,
    onHoldTasks,
    unassignedTasks
  } = useTaskStatuses();

  return (
    <>
      <div className="flex items-center justify-between pt-4">
        <TaskSummaryCard status="total" taskCount={totalTasks} subtext="Total"></TaskSummaryCard>
        <TaskSummaryCard status="unresolved" taskCount={unresolvedTasks} subtext="Unresolved"></TaskSummaryCard>
        <TaskSummaryCard status="dueToday" taskCount={tasksDueToday} subtext="Due Today"></TaskSummaryCard>
        <TaskSummaryCard status="dueToday" taskCount={openTasks} subtext="Open"></TaskSummaryCard>
        <TaskSummaryCard status="dueToday" taskCount={onHoldTasks} subtext="On Hold"></TaskSummaryCard>
        <TaskSummaryCard status="dueToday" taskCount={unassignedTasks} subtext="Unassigned"></TaskSummaryCard>
      </div>
    </>
  );
}

export default TaskStatusContainer;
