import React from 'react';
import { Card as AntCard } from 'antd';

function Card() {
  return (
    <>
      <AntCard className="w-full shadow" bordered={false}>
        Card content
      </AntCard>
    </>
  );
}

export default Card;
