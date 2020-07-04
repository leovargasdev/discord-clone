import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { FaHashtag, FaSignOutAlt } from 'react-icons/fa';

import { Container, Separator } from './styles';

const ChannelInfo: React.FC = () => {
  const history = useHistory();
  const handleSignOut = useCallback(() => {
    localStorage.removeItem('@DiscordLeoVargas:user');
    history.push('/login');
  }, [history]);

  return (
    <Container>
      <div>
        <FaHashtag />
        <h3>chat-geral</h3>
        <Separator />
        <span>Bem-vindo ao canal mais bala das galáxias</span>
      </div>
      <button onClick={handleSignOut} type="button">
        SAIR
        <FaSignOutAlt />
      </button>
    </Container>
  );
};

export default ChannelInfo;
