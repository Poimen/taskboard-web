import React from 'react';
import { Icon as AntIcon } from 'antd';

export function Icon({ type, svg }) {
  const iconOpts = {
    type,
    component: svg
  };

  return (
    <AntIcon {...iconOpts}></AntIcon>
  );
}
