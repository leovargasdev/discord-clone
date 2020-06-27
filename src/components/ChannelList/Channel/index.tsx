import React from 'react';
import { FaHashtag, FaUserPlus, FaCog } from 'react-icons/fa';

import { Container, ChannelSettings } from './styles';

interface IChannel {
  name: string;
  selected?: boolean
}

const Channel: React.FC<IChannel> = ({name, selected}) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <FaHashtag />
        <span>{name}</span>
      </div>

      <ChannelSettings>
        <FaUserPlus />
        <FaCog />
      </ChannelSettings>
    </Container>
  );
}

export default Channel;