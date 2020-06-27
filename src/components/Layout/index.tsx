import React from 'react';
import { MdExpandMore } from 'react-icons/md';

import { Grind, ServerName } from './styles';

import ServerList from '../ServerList';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import ChannelMessages from '../ChannelMessages';
import UserList from '../UserList';

const Layout: React.FC = () => (
  <Grind>
    <ServerList />
    <ServerName />
    <ServerName>
      <h3>Leo Servidor</h3>
      <MdExpandMore />
    </ServerName>
    <ChannelInfo />
    <ChannelList />
    <UserInfo />
    <ChannelMessages />
    <UserList />
  </Grind>
);

export default Layout;
