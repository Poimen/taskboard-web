import React from 'react';
import { Button as AntButton } from 'antd';
import { Icon } from './Icon';

export function TextButton({ children, icon, iconSvg }) {
  return (
    <AntButton className="mr-2">
      <span>{children}</span>
      <Icon type={icon} svg={iconSvg} />
    </AntButton>
  );
}
