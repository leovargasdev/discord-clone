import React from 'react';

import { Grind } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import ChannelData from '../ChannelData';
import UserList from '../UserList';

const Layout: React.FC = () => {
  return (
    <Grind>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Grind>
  );
}

export default Layout;