import React from 'react';
import { Icon } from 'antd';

export function SiderMenuOptionText({ icon, text }) {
  return (
    <div className="block flex items-center">
      <Icon type={icon} />
      <span>{text}</span>
    </div>
  );
}

export default SiderMenuOptionText;
