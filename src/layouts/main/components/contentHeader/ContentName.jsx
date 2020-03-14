import React from 'react';
import { Avatar } from 'antd';
import { Icon } from '../Icon';

export function ContentName({ title, subTitle, iconType, iconSvg }) {
  return (
    <div className="flex items-center">
      <Avatar shape="square" size={55} style={{ color: 'grey' }} icon={<Icon type={iconType} svg={iconSvg} className="font-base" />}></Avatar>
      <div className="flex flex-col ml-2 text-2xl text-gray-800 font-medium">
        <span className="text-xl text-blue-600">{title}</span>
        <span className="text-gray-500 text-xs font-normal">{subTitle}</span>
      </div>
    </div>
  );
}
