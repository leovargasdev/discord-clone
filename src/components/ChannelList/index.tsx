import React from 'react';
import { MdAdd } from 'react-icons/md';

import Channel from './Channel';
import { Container, Category } from './styles';

const ChannelList: React.FC = () => (
  <Container>
    <Category>
      <span>Canais de Texto</span>
      <MdAdd />
    </Category>

    <Channel name="chat-geral" />
    <Channel name="chat-vip" />
    <Channel name="chat-supimpa" className="active" />
    <Channel name="chat-o" />
    <Channel name="chat-do-chat" />
    <Channel name="chat-hu3" />
  </Container>
);

export default ChannelList;
