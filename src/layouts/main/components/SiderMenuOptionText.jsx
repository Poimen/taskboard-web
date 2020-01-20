import React from 'react';
import { Icon } from 'antd';

export function SiderMenuOptionText({ icon, component, text }) {
  const iconOpts = {
    type: icon,
    component: component
  };

  return (
    <div className="block flex items-center">
      <Icon {...iconOpts} />
      <span>{text}</span>
    </div>
  );
}

export default SiderMenuOptionText;
