import React from 'react';
import { FaHashtag } from 'react-icons/fa';

import { Container, Separator } from './styles';

const ChannelInfo: React.FC = () => (
  <Container>
    <FaHashtag />
    <h3>chat-geral</h3>
    <Separator />
    <span>Bem-vindo ao canal mais bala das galáxias</span>
  </Container>
);

export default ChannelInfo;
