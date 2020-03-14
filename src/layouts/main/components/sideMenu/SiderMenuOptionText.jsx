import React from 'react';
import { Icon } from 'antd';

export function SiderMenuOptionText({ icon, svg, text }) {
  const iconOpts = {
    type: icon,
    component: svg
  };

  return (
    <div className="block flex items-center">
      <Icon {...iconOpts} />
      <span>{text}</span>
    </div>
  );
}

export default SiderMenuOptionText;
