import React from 'react';
import { Button, Icon as AntIcon } from 'antd';
import { TextButton, ContextHeader, ContentName, ContextButtonContainer } from '../../../components';

function ClientContextHeader() {
  return (
    <ContextHeader>
      <ContentName title="Clients" subTitle="My Clients" iconType="team" link="client"></ContentName>
      <ContextButtonContainer>
        <Button className="mr-2">Filter <AntIcon type="filter"></AntIcon></Button>
        <TextButton icon="user-add" type="primary">Add client</TextButton>
        <TextButton icon="filter">Configure Clients</TextButton>
      </ContextButtonContainer>
    </ContextHeader>
  );
}

export default ClientContextHeader;
