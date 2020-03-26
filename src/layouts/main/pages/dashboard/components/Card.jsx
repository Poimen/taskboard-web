import React from 'react';
import { Card as AntCard } from 'antd';

const statusToColour = {
  unresolved: 'border-red-500',
  total: 'border-blue-500',
  dueToday: 'border-green-500'
};

function Card({ taskCount, subtext, status }) {
  const cardBorderColor = statusToColour[status];

  return (
    <AntCard loading={false} className="w-full shadow" bordered={false}>
      <div className={`${cardBorderColor} border-l-2`}>
        <div className="flex flex-col items-start justify-between ml-2 py-2 px-4">
          <span className="text-3xl text-black tracking-wide">{taskCount}</span>
          <span className="text-sm text-gray-500">{subtext}</span>
        </div>
      </div>
    </AntCard>
  );
}

export default Card;
