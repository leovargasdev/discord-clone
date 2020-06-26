import React from 'react';
import { FaHashtag, FaUserPlus, FaCog } from 'react-icons/fa';

import { Container, ChannelSettings } from './styles';

interface Props {
  channelName: string;
  selected?: boolean
}

const ChannelButton: React.FC<Props> = ({channelName, selected}) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <FaHashtag />
        <span>{channelName}</span>
      </div>

      <ChannelSettings>
        <FaUserPlus />
        <FaCog />
      </ChannelSettings>
    </Container>
  );
}

export default ChannelButton;