import React from 'react';
import Card from './Card';

function TaskSummaryCard(props) {
  return (
    <div className="flex-auto m-2">
      <Card {...props}></Card>
    </div>
  );
}

export default TaskSummaryCard;
