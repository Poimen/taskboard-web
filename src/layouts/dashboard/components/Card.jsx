import React from 'react';
import { Card as AntCard } from 'antd';

function Card() {
  return (
    <AntCard className="w-full shadow" bordered={false}>
      <div className="border-red-500 border-l-2">
        <div className="flex flex-col items-start justify-between ml-2 p-2">
          <span className="text-3xl text-black tracking-wide">28</span>
          <span className="text-sm text-gray-500">Active tasks</span>
        </div>
      </div>
    </AntCard>
  );
}

export default Card;
