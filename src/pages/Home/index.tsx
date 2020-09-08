import React, { useEffect } from 'react';
import { MdExpandMore } from 'react-icons/md';

import ServerList from '../../components/ServerList';
import ChannelInfo from '../../components/ChannelInfo';
import ChannelList from '../../components/ChannelList';
import UserInfo from '../../components/UserInfo';
import ChannelMessages from '../../components/ChannelMessages';
import UserList from '../../components/UserList';

import { Grind, ServerName } from './styles';

const Home: React.FC = () => {
  // Faz o carregamento do usuário anonimo
  useEffect(() => {
    const user = localStorage.getItem('@DiscordLeoVargas:user');
    if (!user) {
      localStorage.setItem(
        '@DiscordLeoVargas:user',
        JSON.stringify({
          name: 'Anônimo',
          avatar_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQT2KlUEHWKd413pq_-JQZilft0PBdE0DBz5A&usqp=CAU',
        }),
      );
    }
  }, []);

  return (
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
};

export default Home;
