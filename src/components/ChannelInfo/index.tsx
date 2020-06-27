import React from 'react';
import { FaHashtag } from 'react-icons/fa';

import { Container, Separator } from './styles';

const ChannelInfo: React.FC = () => (
  <Container>
    <FaHashtag />

    <h3>chat-geral</h3>

    <Separator />

    <span>Canal aberto para conversas</span>
  </Container>
);

export default ChannelInfo;
