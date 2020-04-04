import React from 'react';
import { ContextHeader, ContentName, ContextButtonContainer } from '../../../components';
import { Button, Icon } from 'antd';

function TaskContextHeader() {
  return (
    <ContextHeader>
      <ContentName title="Tasks" subTitle="My Tasks" iconType="bars" link="tasks"></ContentName>
      <ContextButtonContainer>
        <Button className="mr-2">Filter <Icon type="filter"></Icon></Button>
        <Button className="mr-2" icon="check-square" type="primary">Add task</Button>
        <Button className="mr-2">Configure Tasks <Icon type="filter"></Icon></Button>
      </ContextButtonContainer>
    </ContextHeader>
  );
}

export default TaskContextHeader;
