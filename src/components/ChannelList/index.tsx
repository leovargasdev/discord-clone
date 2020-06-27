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
    <Channel name="chat-vip" selected />
    <Channel name="chat-joje" />
    <Channel name="chat-perdi" />
  </Container>
);

export default ChannelList;
