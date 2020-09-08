import React from 'react';

import servers from './content';
import Discord from '../../assets/icons/discord.svg';
import { Container, Separator, Server } from './styles';

const ServerList: React.FC = () => (
  <Container>
    <Server isHome>
      <img src={Discord} alt="Logo Fake Server Discord" />
    </Server>

    <Separator />

    {servers.map((server, index) => (
      <Server
        key={index.toString()}
        href={server.link}
        target="_new"
        hasNotifications={server.notification}
        mentions={server.mentions}
      >
        <img src={server.image} alt="Logo do gitghub" />
      </Server>
    ))}
  </Container>
);

export default ServerList;
