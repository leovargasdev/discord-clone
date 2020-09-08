import React from 'react';
import { FaHashtag, FaUserPlus, FaCog } from 'react-icons/fa';

import { Container, ChannelSettings } from './styles';

interface IChannel {
  name: string;
  className?: string;
}

const Channel: React.FC<IChannel> = ({ name, className }) => {
  return (
    <Container className={className}>
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
};

export default Channel;
