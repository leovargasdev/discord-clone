import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { FaHashtag, FaSignOutAlt } from 'react-icons/fa';

import { Container, Separator, ButtonLogout } from './styles';

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
        <h3>chat-supimpa</h3>
        <Separator />
        <span>Bem-vindo ao canal mais bala das galáxias</span>
      </div>
      <ButtonLogout onClick={handleSignOut} type="button">
        SAIR
        <FaSignOutAlt />
      </ButtonLogout>
    </Container>
  );
};

export default ChannelInfo;
