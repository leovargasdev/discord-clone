import React from 'react';

import { Container, Background, LogoDiscord } from './styles';
import Logo from '../../assets/logo.svg';

const Login: React.FC = () => {
  return (
    <Container>
      <Background>
        <LogoDiscord>
          <img src={Logo} alt="aaaa" />
        </LogoDiscord>
      </Background>
    </Container>
  );
};

export default Login;
