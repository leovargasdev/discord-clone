import React from 'react';

import { Button } from './styles';

import Logo from '../../assets/wolf-logo.jpg';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({selected, mentions, hasNotifications, isHome}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active': ''}
    >
      {isHome && <img src={Logo} alt="Logo Fake Server Discord"/>}
    
    </Button>
  );
}

export default ServerButton;