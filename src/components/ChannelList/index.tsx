import React from 'react';
import {MdAdd} from 'react-icons/md';

import ChannelButton from '../ChannelButton';
import { Container, Category } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <MdAdd />
      </Category>

      <ChannelButton channelName="chat-geral" selected/>
      <ChannelButton channelName="chat-vip" selected/>
      <ChannelButton channelName="chat-joje" selected/>
      <ChannelButton channelName="chat-perdi" selected/>
    </Container>
  );
}

export default ChannelList;