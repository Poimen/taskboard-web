import React from 'react';

const statusToColour = {
  unresolved: 'border-red-500',
  total: 'border-blue-500',
  dueToday: 'border-green-500'
};

function TaskSummaryCard({ isLoading, taskCount, subtext, status }) {
  const cardBorderColor = statusToColour[status];

  return (
    <div className="flex-auto m-2 bg-white w-full shadow p-2">
      <div className={`${cardBorderColor} border-l-2`}>
        <div className="flex flex-col items-start justify-between ml-2 py-2 px-4">
          <span className="text-3xl text-black tracking-wide">{taskCount}</span>
          <span className="text-sm text-gray-500">{subtext}</span>
        </div>
      </div>
    </div>
  );
}

export default TaskSummaryCard;
