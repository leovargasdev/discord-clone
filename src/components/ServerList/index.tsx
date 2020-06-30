import React from 'react';

import { Container, Separator, Server } from './styles';
import Discord from '../../assets/icons/discord.svg';
import Github from '../../assets/icons/github.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Rocket from '../../assets/icons/rocket.svg';
import Linkedin from '../../assets/icons/linkedin.svg';
import Spotify from '../../assets/icons/spotify.svg';

const ServerList: React.FC = () => (
  <Container>
    <Server isHome>
      <img src={Discord} alt="Logo Fake Server Discord" />
    </Server>

    <Separator />

    <Server
      href="https://github.com/LeeonardoVargas"
      target="_new"
      hasNotifications
    >
      <img src={Github} alt="Logo do gitghub" />
    </Server>
    <Server href="https://instagram.com/leuvargas" target="_new">
      <img src={Instagram} alt="Logo do instagram" />
    </Server>
    <Server href="https://leonardovargas.me" target="_new">
      <img src={Rocket} alt="Rocket icon" />
    </Server>
    <Server
      href="https://www.linkedin.com/in/leonardo-luis-de-vargas/"
      target="_new"
      mentions={10}
    >
      <img src={Linkedin} alt="Logo do linkedin" />
    </Server>
    <Server href="https://open.spotify.com/user/leo_vargas" target="_new">
      <img src={Spotify} alt="Logo do spotify" />
    </Server>

    <Server className="active" />
    <Server />
    <Server />
  </Container>
);

export default ServerList;
