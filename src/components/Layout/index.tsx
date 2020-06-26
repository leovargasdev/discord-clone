import React from 'react';

import { Grind } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';

const Layout: React.FC = () => {
  return (
    <Grind>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
    </Grind>
  );
}

export default Layout;