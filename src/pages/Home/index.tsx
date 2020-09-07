import React from 'react';
import { MdExpandMore } from 'react-icons/md';

import ServerList from '../../components/ServerList';
import ChannelInfo from '../../components/ChannelInfo';
import ChannelList from '../../components/ChannelList';
import UserInfo from '../../components/UserInfo';
import ChannelMessages from '../../components/ChannelMessages';
import UserList from '../../components/UserList';

import { Grind, ServerName } from './styles';

const Home: React.FC = () => (
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

export default Home;
