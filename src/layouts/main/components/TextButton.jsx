import React from 'react';
import { Button as AntButton } from 'antd';
import { Icon } from './Icon';

export function TextButton({ children, icon, iconSvg, type }) {
  const buttonType = type || 'default';
  return (
    <AntButton className="mr-2" type={buttonType}>
      <span>{children}</span>
      <Icon type={icon} svg={iconSvg} />
    </AntButton>
  );
}
