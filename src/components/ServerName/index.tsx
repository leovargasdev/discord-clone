import React from 'react';
import { MdExpandMore } from 'react-icons/md';

import { Container } from './styles';

const ServerName: React.FC = () => {
  return (
    <Container>
      <h3>Nome do Servidor</h3>
      <MdExpandMore />
    </Container>
  );
}

export default ServerName;